import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlipCard from './components/FlipCard'; // Import FlipCard from a separate file
import './App.css'; // Import your CSS styles
import Dashboard from './components/Dashboard'; // Import Dashboard
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Login */}
        <Route path="/login" element={<FlipCard isLoginForm={true} />} />
        
        {/* Route for Register */}
        <Route path="/register" element={<FlipCard isLoginForm={false} />} />
        
        {/* Protected Route for Dashboard */}
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />

        {/* Default Route for Home */}
        <Route 
          path="/" 
          element={
            <div>
              <h1>Welcome to the Health Tracker</h1>
            </div>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
