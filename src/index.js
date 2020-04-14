import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './app';
import './index.css';
import axios from 'axios';

axios
  .get('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => console.log(response));

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
