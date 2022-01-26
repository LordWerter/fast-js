import { css, Global, ThemeProvider } from '@emotion/react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import resets from './assets';
import App from './epics/App/index';

import reportWebVitals from './reportWebVitals';
import { store } from './store';

import theme from './theme';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App sizeId={'desktop'} />
        <Global styles={resets || css``} />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
