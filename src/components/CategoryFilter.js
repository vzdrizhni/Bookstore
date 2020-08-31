import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({filterHandler}) => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi'
  ];

  return (
    <div className='panel-bg'>
      <div className='booker'>
        <div className='Bookstore-CMS'><h4>Bookstore CMS</h4></div>
        <div className='BOOKS'>BOOKS</div>
        <select className='CATEGORIES' onChange={filterHandler}>
          <option>
            CATEGORIES
          </option>
          {categories.map(category => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
          <option>
            All
          </option>
        </select>
      </div>
      <div className='Oval'>
        <i className="fas fa-user-alt Mask"></i>
      </div>
    </div>
  );
};

CategoryFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired
};

export default CategoryFilter;
