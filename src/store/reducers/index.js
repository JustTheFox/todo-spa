import { combineReducers } from 'redux';
import tasksReducer from './tasks';
import filterReducer from './filter';
import searchReducer from './search';

// eslint-disable-next-line import/prefer-default-export
export default combineReducers({
  tasks: tasksReducer,
  filter: filterReducer,
  search: searchReducer,
});
