import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FlipCard.css'; // Import CSS specific to the flip card

function FlipCard({ isLoginForm }) {
  const [isFlipped, setIsFlipped] = useState(!isLoginForm);
  const navigate = useNavigate(); // React Router's navigate function

  // Function to toggle between login and register form with navigation
  const handleFlipToRegister = () => {
    setIsFlipped(true);
    navigate('/register'); // Navigate to register route
  };

  const handleFlipToLogin = () => {
    setIsFlipped(false);
    navigate('/login'); // Navigate to login route
  };

  return (
    <div className="flip-card-container">
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-inner">
          {/* Front side: Login Form */}
          <div className="flip-card-front">
            <h1>Login</h1>
            <form className="form">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>
            <button className="flip-button" onClick={handleFlipToRegister}>
              Go to Register
            </button>
          </div>

          {/* Back side: Register Form */}
          <div className="flip-card-back">
            <h1>Register</h1>
            <form className="form">
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Register</button>
            </form>
            <button className="flip-button" onClick={handleFlipToLogin}>
              Go to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
