import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './globalStyles';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <div style={{ backgroundColor: 'blue' }}>Content</div>
    <button>Click me</button>
    <p>Para</p>
  </React.StrictMode>,
  document.getElementById('root')
);
