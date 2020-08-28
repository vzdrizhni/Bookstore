import React from 'react';

class BooksFrom extends React.Component {

  constructor() {
    super();

    this.state = {
      category: '',
      title: ''
    }
  }

  categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi'
  ];

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form action="submit">
        <input type="text" onChange={this.handleChange}/>
        <select name="categories">
          {this.categories.map(category => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
};

export default BooksFrom;
