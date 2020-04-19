import { combineReducers } from 'redux';
import tasksReducer from './tasks';
import themeReducer from './theme';

// eslint-disable-next-line import/prefer-default-export
export default combineReducers({
  tasks: tasksReducer,
  theme: themeReducer,
});
