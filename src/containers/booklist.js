import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BookList = ({
  books, removeBook, filterChange, filter,
}) => {
  const handleBookRemove = book => removeBook(book);

  const handleFilterChange = e => {
    const filter = e.target.value;
    filterChange(filter);
  };

  const bookFilter = (books, filter) => (filter === 'All'
    ? books
    : books.filter(book => book.category === filter));

  return (
    <div>
      <CategoryFilter filterHandler={handleFilterChange} />
      <div className="panel-bg2">
        <div className="table">
          {bookFilter(books, filter).map(book => (
            <Book
              id={book.id}
              title={book.title}
              category={book.category}
              key={book.id}
              book={book}
              removeBook={handleBookRemove}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  filterChange: book => dispatch(changeFilter(book)),
});

BookList.propTypes = {
  books: PropTypes
    .instanceOf(Object)
    .isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  filterChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
