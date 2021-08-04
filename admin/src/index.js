import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import store from './store'
import App from './App';
import AppRouter from './routers/Router'


ReactDOM.render(
  <Provider store = {store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);

