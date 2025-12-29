import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import 'bootstrap/dist/css/bootstrap.min.css';

const FinalScorePage = ({ score, total, onRestart }) => {
  const percentage = (score / total) * 10;

  const getFeedback = () => {
    if (percentage >= 8) {
      return {
        image: '/images/waah.png',
        // text: 'WAAH!',
        scoreBg: '#198754', // green
        numberColor: '#ffef60',
        btnColor: '#198754',
        btnText: 'Share your score ➜',
        showConfetti: true,
      };
    } else if (percentage >= 5) {
      return {
        image: '/images/hmm.png',
        // text: 'HMM..',
        scoreBg: '#0d6efd', // blue
        numberColor: '#ffef60',
        btnColor: '#0d6efd',
        btnText: 'Share your score ➜',
        showConfetti: false,
      };
    } else {
      return {
        image: '/images/nahii.png',
        // text: 'NAHIII!',
        scoreBg: '#dc3545', // red
        numberColor: '#ffef60',
        btnColor: '#dc3545',
        btnText: 'Share your score ➜',
        showConfetti: false,
      };
    }
  };

  const { text, image, scoreBg, numberColor, btnColor, btnText, showConfetti } = getFeedback();

  useEffect(() => {
    if (showConfetti) {
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.3 },
      });
    }
  }, [showConfetti]);

  return (
    <div
      className="d-flex justify-content-center align-items-top"
      style={{ backgroundColor: '#E8E8E8', minHeight: '100vh' }}
    >
    <div
      className="d-flex w-100 justify-content-center align-items-center flex-column"
      style={{ backgroundColor: '#fff0dc', minHeight: '100vh', textAlign: 'center' }}
    >
      {/* Score Box */}
      <div
        style={{
          backgroundColor: scoreBg,
          color: '#fff',
          borderRadius: '20px',
          boxShadow: '4px 4px 0px #000',
          padding: '12px 10px',
          minWidth: '180px',
          marginBottom: '40px',
        }}
      >
        <div
          className="fw-bold"
          style={{ fontSize: '1.5rem', fontWeight: '1000',textTransform: 'uppercase', letterSpacing: '1px' }}
        >
          Your Score
        </div>
        <div
          style={{
            fontSize: '2.5rem',
            fontWeight: '800',
          }}
        >
          <span style={{ color: numberColor }}>{score}</span>
          <span style={{ color: '#fff' }}> / {total}</span>
        </div>
      </div>

      {/* Emotion Text */}
      <h1 className="fw-bolder text-dark mb-2" style={{ fontSize: '3rem' }}>{text}</h1>

      {/* Character Image */}
      <img
        src={image}
        alt="Feedback"
        style={{ maxWidth: '320px', height: '320px', marginBottom: '0px' }}
      />

      {/* Share Button */}
      <button
        className="fw-bold text-white px-4 py-2 mb-3"
        style={{
          backgroundColor: btnColor,
          border: 'none',
          borderRadius: '30px',
          boxShadow: '2px 2px 4px #00000040',
        }}
        onClick={() => alert(`Score Shared: ${score}/${total}`)}
      >
        {btnText}
      </button>

      {/* Play Again */}
      <button
        onClick={onRestart}
        className="btn btn-link text-dark fw-medium text-decoration-none"
        style={{ fontSize: '1.2rem' }}
      >
        🔄 Play again
      </button>
    </div>
    </div>
  );
};

export default FinalScorePage;
