import React from "react";
import { connect } from "react-redux";
import Book from "../components/Book"

const BookList = ({books}) => (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (<Book book={book}/>))}
      </tbody>
    </table>
)

const mapStateToProps = (state) => {
    return {
      books: state.books
    }
}

export default connect(mapStateToProps)(BookList);