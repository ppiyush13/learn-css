import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './globalStyles';
//import { App } from './App';
import App from './Inherit';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
