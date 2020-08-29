import React from 'react';
import BookList from '../containers/booklist';
import BookForm from '../containers/bookform'; // eslint-disable-line import/no-named-as-default-member, import/no-named-as-default

function App() {
  return (
    <div className="App">
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
