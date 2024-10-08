import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import './index.css';
import App from './App';
import Login from './components/Login'
import Register from './components/Register';
const rootElement = document.getElementById('root');

// Create the root using createRoot and render the app
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
