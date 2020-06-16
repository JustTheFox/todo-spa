import { combineReducers } from 'redux';
import boards from './boards';
import lists from './lists';
import tasks from './tasks';
import colors from './colors';
import filter from './filter';
import search from './search';

export default combineReducers({
  boards,
  lists,
  tasks,
  colors,
  filter,
  search,
});
