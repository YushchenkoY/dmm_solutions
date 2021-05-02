import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import storeRedux from './redux/store';

ReactDOM.render(
  <Provider store={storeRedux}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();