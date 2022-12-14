function reducer(state = {type: 'All', value: ''}, action) {
  if (action.payload) {
    return action.payload;
  } else {
    return state;
  }
} 

export default reducer;