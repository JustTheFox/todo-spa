import { combineReducers } from 'redux';
import themeReducer from './theme';
import tasksReducer from './tasks';
import filterReducer from './filter';
import searchReducer from './search';

// eslint-disable-next-line import/prefer-default-export
export default combineReducers({
  theme: themeReducer,
  tasks: tasksReducer,
  filter: filterReducer,
  search: searchReducer,
});
