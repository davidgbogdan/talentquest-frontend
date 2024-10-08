import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import './global.css';


const resizeObserverLoopErrRe = /^ResizeObserver loop limit exceeded/;

const originalError = console.error;
console.error = (...args) => {
  if (resizeObserverLoopErrRe.test(args[0])) {
    return;
  }
  originalError.call(console, ...args);
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
