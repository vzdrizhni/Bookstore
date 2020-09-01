import React from 'react';
import BookList from '../containers/booklist';
import BookForm from '../containers/bookform'; // eslint-disable-line import/no-named-as-default-member, import/no-named-as-default
import '../assets/styles/style.css';

function App() {
  return (
    <div className="App">
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
