import React from 'react';
import ReactDOM from 'react-dom';
// react-redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';
// my code
import App from './components/App';
import reducers from './reducers'
// if you don't specify a file, webpack will auto-give your 
// index.js
// import {selectSong} from '../actions';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
    </Provider>,
  document.querySelector('#root'));

