import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducer from './reducers/index';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 1000),
      title: 'The Shining',
      category: 'Horror',
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: 'Call of Cthulhu',
      category: 'Horror',
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: 'For Whom the Bell Tolls',
      category: 'Action',
    },
  ],
  filter: 'All',
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
