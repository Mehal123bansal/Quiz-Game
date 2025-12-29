import React from 'react';
import { useNavigate } from 'react-router-dom';
import momImg from '../assets/mom.png';
import logoImg from '../assets/logo.png';

function Home() {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div
      className="d-flex justify-content-center align-items-top"
      style={{ backgroundColor: '#E8E8E8', minHeight: '100vh' }}
    >
    <div
      className="d-flex flex-column align-items-center justify-content-between"
      style={{
        minHeight: '100vh',
        backgroundColor: '#fff0dc',
        padding: '50px 10px',
        textAlign: 'center',
      }}
    >
      {/* Logo */}
      <div>
        <img src={logoImg} alt="The MOM Test" style={{ width: '200px' }} />
      </div>

      {/* Mom Image */}
      <div  className="relative  max-w-sm  mx-auto">
        <img src={momImg} alt="Indian Mom Cartoon"  className="w-full h-full rounded-xl" />
      </div>

      {/* Play Button */}
      <div>
        <button
          className="btn btn-success fw-bold"
          onClick={startQuiz}
          style={{
            padding: '10px 24px',
            fontSize: '18px',

            borderRadius: '30px',
          }}
        >
          Play Quiz <span style={{ marginLeft: '8px' }}>➜</span>
        </button>
      </div>

      {/* Footer */}
      <div className="mt-3 text-muted small" style={{ fontSize: '12px' }}>
        Made with love (and mild emotional blackmail) by Indian moms
      </div>
    </div>
    </div>
  );
}

export default Home;
