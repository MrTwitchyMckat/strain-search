function reducer(state = {type: 'All', value: ''}, action) {
  if (action.type === 'updateValue') {
    return action.payload;
  } else {
    return state;
  }
} 

export default reducer;