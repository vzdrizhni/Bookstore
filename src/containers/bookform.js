import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createBook} from '../actions';

class BooksFrom extends React.Component {
  categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi'
  ];

  constructor(props) {
    super(props);

    this.state = {
      id: this.randomizer(),
      category: '',
      title: ''
    };
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit = e => {
    e.preventDefault();
    const {createBook} = this.props;
    createBook(this.state);
    this.setState({
      id: this.randomizer(),
      title: '',
      category: ''
    });
  }

  randomizer() { // eslint-disable-line class-methods-use-this
    return Math.floor(Math.random() * 1000);
  }

  render() {
    return (
      <div className='form-container'>
        <h2 className='add-title'>ADD NEW BOOK</h2>
        <form action="submit" onSubmit={this.handleSubmit}>
          <input type="text" name="title" className='Lesson-Panel2' placeholder='Book title' onChange={this.handleChange}/>
          <select
            name="category"
            className='Lesson-Panel3'
            defaultValue={this.categories[0]}
            onChange={this.handleChange}>
            {this
              .categories
              .map(category => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
          </select>
          <button className='Rectangle-4' type="submit"><span className='ADD-BOOK'>SUBMIT</span></button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  }
});

BooksFrom.propTypes = {
  createBook: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(BooksFrom);
