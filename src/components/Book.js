import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  removeBook, book,
}) => {
  const { id, category, title } = book;
  return (
    <div className='Lesson-Panel'>
      <span>{id}</span>
      <span>{title}</span>
      <span>{category}</span>
      <span><button type="button" onClick={() => removeBook(book)}>Remove Book</button></span>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
