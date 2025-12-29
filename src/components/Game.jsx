import React, { useState } from 'react';
import questions from '../questions';
import FinalScorePage from './FinalScorePage'; // 👈 import
import 'bootstrap/dist/css/bootstrap.min.css';

function Game() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showFinalPage, setShowFinalPage] = useState(false); // 👈 added
  const currentQuestion = questions[currentIndex];

  const handleOptionClick = (option) => {
    const value = typeof option === 'object' && option?.props?.src ? option.props.src : option;
    setSelectedOption(value);

    if (value === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      goToNextQuestion(value);
    }, 1000);
  };

  const skipQuestion = () => {
    goToNextQuestion(null);
  };

  const goToNextQuestion = (selected) => {
    const isCorrect = selected === currentQuestion.correctAnswer;
    const newScore = isCorrect ? score + 1 : score;

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setScore(newScore);
    } else {
      // alert(`Quiz finished! Your score: ${newScore} / ${questions.length}`);
      setCurrentIndex(0);
      setScore(0);
      setSelectedOption(null);
      // Show Final Page
       setScore(newScore);
      setShowFinalPage(true);
    }
  };
const restartGame = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setShowFinalPage(false);
  };

  if (showFinalPage) {
    return <FinalScorePage score={score} total={questions.length} onRestart={restartGame} />;
  }

  return (
    <div
      className="d-flex justify-content-center align-items-top"
      style={{ backgroundColor: '#E8E8E8', minHeight: '100vh' }}
    >
      <div
        className="w-100"
        style={{
          maxWidth: '480px',
          backgroundColor: '#fff0dc',
          padding: '20px',
        }}
      >
        {/* Top Controls */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <button
            className="btn btn-dark rounded-circle fw-bold"
            onClick={() => window.confirm('Exit quiz?') && window.location.reload()}
            style={{ width: '36px', height: '36px', fontSize: '20px', padding: '0px 0 5px ' }}
          >
            ×
          </button>

          <div className="flex-grow-1 px-4 py-4 ">
            <div className="progress mt-1" style={{ height: '8px' }}>
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{
                  width: `${((currentIndex + 1) / questions.length) * 100}%`,
                }}
              ></div>
            </div>
            <div className="text-center">
              <small className="text-success fw-bold">
                {currentIndex + 1} / {questions.length}
              </small>
            </div>
          </div>

          <button
            className="btn btn-outline-warning fw-bold"
            onClick={skipQuestion}
            style={{ fontSize: '14px' }}
          >
            SKIP
          </button>
        </div>

        {/* Question Text */}
        <div className="text-center px-3 mb-3">
          <h5 className="fw-bold mb-0">{currentQuestion.question}</h5>
        </div>

        {/* Question Image */}
        {currentQuestion.image && (
          <div className="text-center mb-4">
            <img
              src={currentQuestion.image}
              alt="Question Visual"
              className="img-fluid"
              style={{
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
        )}

        {/* Options Grid */}
        <div className="row px-10 py-10">
          {currentQuestion.options.map((opt, index) => {
            const isCorrect =
              (typeof opt === 'object' && opt?.props?.src) === currentQuestion.correctAnswer ||
              opt === currentQuestion.correctAnswer;

            const optValue =
              typeof opt === 'object' && opt?.props?.src ? opt.props.src : opt;

            const isSelected = selectedOption === optValue;
            const buttonClass = isSelected
              ? isCorrect
                ? 'btn-success'
                : 'btn-danger'
              : 'btn-light border';

            return (
              <div className="col-6 flex-auto mb-3 px-10" key={index}>
                {currentQuestion.isImageOptions ? (
                  <div
                    onClick={() => handleOptionClick(opt)}
                    className="p-2"
                    style={{
                      backgroundColor: '#fff0dc',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      weight:'100%',
                      height:'100%',
                      border: isSelected ? (isCorrect ? '3px solid green' : '3px solid red') : '1px solid #fff0dc',
                    }}
                  >
                    <img
                      src={optValue}
                      alt={`option-${index}`}
                      className="img-fluid"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        borderRadius: '10px',
                      }}
                    />
                  </div>
                ) : (
                  <button
                    className={`btn w-100 py-6 text-white fw-bold ${buttonClass}`}
                    style={{
                      backgroundColor: !isSelected ? '#6d4c41' : undefined,
                      fontSize: '15px',
                      borderRadius: '12px',
                      minHeight: '60px',
                    }}
                    onClick={() => handleOptionClick(opt)}
                    disabled={!!selectedOption}
                  >
                    {opt}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Game;
