// eslint-disable-next-line
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
require('dotenv').config();
console.log(process.env.API_KEY)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);