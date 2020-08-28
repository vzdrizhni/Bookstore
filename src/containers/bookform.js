import React from 'react';
import { createBook } from "../actions";
import { connect } from 'react-redux'

class BooksFrom extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: this.randomizer(),
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

  randomizer() {
    return Math.floor(Math.random() * 1000)
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { createBook } = this.props;
    console.log(this.props);
    createBook(this.state);
    this.setState({
      id: this.randomizer(),
      title: '',
      category: '',
    });
  }

  render() {
    return (
      <form action="submit" onSubmit={this.handleSubmit}>
        <input type="text" name="title" onChange={this.handleChange}/>
        <select name="category" defaultValue={this.categories[0]} onChange={this.handleChange}>
          {this.categories.map(category => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        <button type='submit'>Submit</button>
      </form>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksFrom);
