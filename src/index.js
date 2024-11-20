import React from 'react';
import ReactDOM from 'react-dom/client';  // For React 18 and later
import App from './components/UI/App';
import './index.css';  // Optional: For global styles if you have them

// Create the root element for React to mount to (required in React 18+)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

