import { combineReducers } from 'redux';
import tasksReducer from './tasks';
import subtasksReducer from './subtasks';
import filterReducer from './filter';
import searchReducer from './search';

// eslint-disable-next-line import/prefer-default-export
export default combineReducers({
  tasks: tasksReducer,
  subtasks: subtasksReducer,
  filter: filterReducer,
  search: searchReducer,
});
