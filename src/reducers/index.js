import { combineReducers } from 'redux';
import bookReducer from './book';
import filterReducer from './filter';

const reducer = combineReducers({ books: bookReducer, filter: filterReducer });

export default reducer;
