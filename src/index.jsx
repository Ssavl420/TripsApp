import React from 'react';
import createRoot from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux';
// import { store } from 'store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

createRoot.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

