import React from 'react'

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
    <select onChange={filterHandler}>
      <option>
        All
      </option>
      {categories.map(category => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  )
}

export default CategoryFilter;