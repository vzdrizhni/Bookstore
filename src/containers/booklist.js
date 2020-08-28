import React from "react";
import { connect } from "react-redux";
import * as actions from '../actions/index'

const BookList = ({books}) => (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
    </table>
)

const mapStateToProps = (state) => {
    return {
      books: state.books
    }
}

export default connect(mapStateToProps)(BookList);