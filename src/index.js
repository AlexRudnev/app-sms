import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/App';
// import ConnectBinotel from './data/binotelBD'

import './index.css';


ReactDOM.render(
  <React.StrictMode > { /* <ConnectBinotel /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);