import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';
import { injectGlobal } from 'styled-components';
import 'typeface-lato';

injectGlobal`
    *,
    *::after,
    *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      box-sizing: border-box;
      font-family: "Inter", sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.7;
      color: #333333;
      padding: 0;
    }
`;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
