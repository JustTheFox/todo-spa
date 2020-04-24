import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  TOGGLE_LIST_ITEM,
  LIKE_TASK,
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

export const toggleListItemAction = (taskId, itemId) => ({
  type: TOGGLE_LIST_ITEM,
  payload: {
    taskId,
    itemId,
  },
});

export const likeTaskAction = (id) => ({
  type: LIKE_TASK,
  payload: id,
});

export const filterTaskAction = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const setSearchValueAction = (value) => ({
  type: SET_SEARCH_VALUE,
  payload: value,
});
