import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import FinalScorePage from './components/FinalScorePage'; // ✅ Import it
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Game />} />
        <Route
          path="/result"
          element={
            <FinalScorePage score={0} total={10} onRestart={() => window.location.href = '/quiz'} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
