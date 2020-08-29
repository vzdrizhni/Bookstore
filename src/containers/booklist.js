import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BookList = ({ books, removeBook }) => {
   const handleBookRemove = (book) => removeBook(book)
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {books.map(book => (
        <Book
          id={book.id}
          title={book.title}
          category={book.category}
          key={book.id}
          book={book}
          removeBook={handleBookRemove}
        />
      ))}
    </tbody>
  </table>
);

const mapStateToProps = state => ({ books: state });

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
});

BookList.propTypes = {
  books: PropTypes
    .instanceOf(Object)
    .isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
