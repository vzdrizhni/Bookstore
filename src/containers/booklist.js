import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import {removeBook, changeFilter} from '../actions';
import CategoryFilter from "../components/CategoryFilter";

const BookList = ({books, removeBook, filterChange, filter}) => {

  const handleBookRemove = book => removeBook(book);

  const handleFilterChange = (e) => {
    const filter = e.target.value;
    filterChange(filter);
  }

  const bookFilter = (books, filter) => {
    return filter === 'All' ? books : books.filter(book => book.category === filter)
  };
  console.log(filter);

  return (
    <div>
      <CategoryFilter filterHandler = {handleFilterChange}/>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          { bookFilter(books, filter)
            .map(book => (<Book
            id={book.id}
            title={book.title}
            category={book.category}
            key={book.id}
            book={book}
            removeBook={handleBookRemove}/>))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({books: state.books, filter: state.filter});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  filterChange: book => dispatch(changeFilter(book))
});

BookList.propTypes = {
  books: PropTypes
    .instanceOf(Object)
    .isRequired,
  removeBook: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
