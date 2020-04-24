import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import { store } from './store/store';
import { ThemeProvider } from './context/theme-context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
