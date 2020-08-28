import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import bookReducer from "./reducers/book";

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 100),
      title: 'The Shining',
      category: 'Horror'
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Call of Cthulhu',
      category: 'Horror'
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'For Whom the Bell Tolls',
      category: 'Action'
    }
  ]
}

const store = createStore(bookReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
