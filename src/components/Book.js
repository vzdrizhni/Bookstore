import React from 'react';
import PropTypes from 'prop-types';

const Book = ({removeBook, book}) => {
  const {id, category, title} = book;
  return (
    <div className='Lesson-Panel'>
      <div className='book-wrapper'>
        <div className='description'>
          <span className='School-of'>{category}</span>
          <span className='title'>{title}</span>
          <span className='Suzanne-Collins'>{id}</span>
        </div>
        <div className='Comments'>
          <span>Comments |
          </span>
          <span>Remove |
          </span>
          <span>Edit</span>
        </div>
      </div>
      <div className='Rectangle-3'>
        <div className='Oval-2'></div>
        <div className='percent'>
          <span className='-Percent-Complete'>50%</span>
          <span className='Completed'>Completed</span>
        </div>
      </div>
      <div className='chapter'>
        <span className='Current-Chapter'>CURRENT CHAPTER</span>
        <span className='Current-Lesson'>CHAPTER 17</span>
        <button type="button" className='Rectangle-2' onClick={() => removeBook(book)}>REMOVE BOOK</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes
    .shape({id: PropTypes.number.isRequired, title: PropTypes.string.isRequired, category: PropTypes.string.isRequired})
    .isRequired,
  removeBook: PropTypes.func.isRequired
};

export default Book;
