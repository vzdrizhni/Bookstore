import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

class BooksFrom extends React.Component {
  categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  constructor(props) {
    super(props);

    this.state = {
      id: this.randomizer(),
      category: '',
      title: '',
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { createBook } = this.props;
    createBook(this.state);
    this.setState({
      id: this.randomizer(),
      title: '',
      category: '',
    });
  }

  randomizer() { // eslint-disable-line class-methods-use-this
    return Math.floor(Math.random() * 1000);
  }

  render() {
    return (
      <form action="submit" onSubmit={this.handleSubmit}>
        <input type="text" name="title" onChange={this.handleChange} />
        <select name="category" defaultValue={this.categories[0]} onChange={this.handleChange}>
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
}

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

BooksFrom.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksFrom);
