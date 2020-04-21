import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  LIKE_TASK,
  TOGGLE_THEME,
  SET_FILTER,
  SET_SEARCH_VALUE,
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

export const filterTaskAction = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const setSearchValueAction = (value) => ({
  type: SET_SEARCH_VALUE,
  payload: value,
});
