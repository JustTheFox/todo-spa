import { combineReducers } from 'redux';
import boards from './boards';
import tasks from './tasks';
import filter from './filter';
import search from './search';

export default combineReducers({
  boards,
  tasks,
  filter,
  search,
});
