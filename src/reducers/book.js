const bookReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      console.log(state);
      return [...state, action.book];
    case 'REMOVE_BOOK':
      return [...state.slice(0, action.index), ...state.slice(action.index + 1, state.length)];
    default:
      return state;
  }
};

export default bookReducer;
