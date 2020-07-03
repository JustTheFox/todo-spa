import { combineReducers } from 'redux';
import boards from './boards';
import currentBoard from './current-board';
import lists from './lists';
import colors from './colors';
import search from './search';

export default combineReducers({
  boards,
  currentBoard,
  lists,
  colors,
  search,
});
