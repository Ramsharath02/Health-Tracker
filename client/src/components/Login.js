import React, { useState } from 'react';
import axios from '../axios'; // Your Axios instance
import { useNavigate } from 'react-router-dom'; // For redirecting

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // React Router v6 navigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Log email and password to ensure they are being captured
      console.log("Submitted Email:", email);
      console.log("Submitted Password:", password);

      // Send POST request to your backend login endpoint
      const response = await axios.post('/auth/login', { email, password }); // Make sure the route matches your backend

      console.log("Response from server:", response.data);

      // Save JWT token in localStorage
      localStorage.setItem('authToken', response.data.token);

      // Navigate to the dashboard after successful login
      navigate('/dashboard');
    } catch (error) {
      console.error("Login error:", error);

      // Display error message from server or fallback message
      if (error.response && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage('An error occurred during login. Please try again.');
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {/* Show the error message if it exists */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
