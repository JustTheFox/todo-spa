import axios from 'axios';
import {
  FETCH_TASKS_STARTED,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  DELETE_TASK_STARTED,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  ADD_TASK_STARTED,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  TOGGLE_TASK,
  TOGGLE_LIST_ITEM,
  LIKE_TASK,
} from '../const';

export const fetchTasksStart = () => {
  return {
    type: FETCH_TASKS_STARTED,
  };
};

export const fetchTasksSuccess = (tasks) => {
  return {
    type: FETCH_TASKS_SUCCESS,
    payload: tasks,
  };
};

export const fetchTasksFailure = (err) => {
  return {
    type: FETCH_TASKS_FAILURE,
    error: err,
  };
};

export const fetchTasks = () => {
  return (dispatch) => {
    dispatch(fetchTasksStart());
    axios
      .get('http://localhost:3004/tasks?_sort=timestamp&_order=desc')
      .then((res) => {
        dispatch(fetchTasksSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchTasksFailure(err.message));
      });
  };
};

export const deleteTasksStart = () => {
  return {
    type: DELETE_TASK_STARTED,
  };
};

export const deleteTasksSuccess = (tasks) => {
  return {
    type: DELETE_TASK_SUCCESS,
    payload: tasks,
  };
};

export const deleteTasksFailure = (err) => {
  return {
    type: DELETE_TASK_FAILURE,
    error: err,
  };
};

export const deleteTaskAction = (id) => {
  return (dispatch) => {
    dispatch(deleteTasksStart());
    axios
      .delete(`http://localhost:3004/tasks/${id}`)
      .then(() => {
        dispatch(deleteTasksSuccess(id));
      })
      .catch((err) => {
        dispatch(deleteTasksFailure(err.message));
      });
  };
};

export const addTaskStart = () => ({
  type: ADD_TASK_STARTED,
});

export const addTaskSuccess = (task) => ({
  type: ADD_TASK_SUCCESS,
  payload: task,
});

export const addTaskFailure = (error) => ({
  type: ADD_TASK_FAILURE,
  payload: {
    error,
  },
});

export const addTaskAction = (task) => {
  return (dispatch) => {
    dispatch(addTaskStart());
    axios
      .post('http://localhost:3004/tasks/', task)
      .then(() => {
        dispatch(addTaskSuccess(task));
      })
      .catch((err) => {
        dispatch(addTaskFailure(err.message));
      });
  };
};

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
