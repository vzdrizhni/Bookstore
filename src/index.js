import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
