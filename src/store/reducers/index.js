import { combineReducers } from 'redux';
import boards from './boards';
import lists from './lists';
import colors from './colors';
import search from './search';

export default combineReducers({
  boards,
  lists,
  colors,
  search,
});
