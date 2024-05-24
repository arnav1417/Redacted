import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Nav from './components/Nav/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav/>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();