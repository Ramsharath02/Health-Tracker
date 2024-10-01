// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
  // Retrieve the token from localStorage
  const authToken = localStorage.getItem('authToken');

  // Check if the token exists and is valid
  const isAuthenticated = authToken !== null;

  // If authenticated, render the protected component, else navigate to login
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
