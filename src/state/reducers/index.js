import { combineReducers } from "redux";
import searchReducer from './searchReducer';

const reducers = combineReducers({
  searchValues: searchReducer
});

export default reducers;