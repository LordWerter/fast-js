import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { reset } from './epics/App/App.styles';
import App from './epics/App/index';
import reportWebVitals from './reportWebVitals';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
    <Global styles={reset} />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
