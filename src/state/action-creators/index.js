export function udpateSearchValues(values) {
  return (dispatch) => {
    dispatch({
      type: "updateValue",
      payload: values
    })
  }
}