import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  LIKE_TASK,
  TOGGLE_THEME,
  SET_FILTER,
} from './const';

export const addTaskAction = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTaskAction = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const toggleTaskAction = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
});

export const likeTaskAction = (id) => ({
  type: LIKE_TASK,
  payload: id,
});

export const toggleThemeAction = (theme) => ({
  type: TOGGLE_THEME,
  payload: theme,
});

export const FILTERS = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_FAVORITE: 'SHOW_FAVORITE',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
};

export const filterTaskAction = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
