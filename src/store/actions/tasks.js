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
  TOGGLE_TASK_SUCCESS,
  TOGGLE_TASK_FAILURE,
  LIKE_TASK_SUCCESS,
  LIKE_TASK_FAILURE,
  SET_COLOR_STARTED,
  SET_COLOR_SUCCESS,
  SET_COLOR_FAILURE,
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

export const fetchTasks = () => (dispatch) => {
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

export const addTaskAction = (task) => (dispatch) => {
  dispatch(addTaskStart());
  axios
    .post('http://localhost:3004/tasks', task)
    .then(() => {
      dispatch(addTaskSuccess(task));
    })
    .catch((err) => {
      dispatch(addTaskFailure(err.message));
    });
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

export const deleteTaskAction = (id) => (dispatch) => {
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

export const toggleTaskSuccess = (id) => ({
  type: TOGGLE_TASK_SUCCESS,
  payload: id,
});

export const toggleTaskFailure = (error) => ({
  type: TOGGLE_TASK_FAILURE,
  payload: {
    error,
  },
});

export const toggleTaskAction = (id, state) => (dispatch) => {
  axios
    .patch(`http://localhost:3004/tasks/${id}`, {
      done: !state,
    })
    .then(() => {
      dispatch(toggleTaskSuccess(id));
    })
    .catch((err) => {
      dispatch(toggleTaskFailure(err.message));
    });
};

export const likeTaskSuccess = (id) => ({
  type: LIKE_TASK_SUCCESS,
  payload: id,
});

export const likeTaskFailure = (error) => ({
  type: LIKE_TASK_FAILURE,
  payload: {
    error,
  },
});

export const likeTaskAction = (id, state) => (dispatch) => {
  axios
    .patch(`http://localhost:3004/tasks/${id}`, {
      liked: !state,
    })
    .then(() => {
      dispatch(likeTaskSuccess(id));
    })
    .catch((err) => {
      dispatch(likeTaskFailure(err.message));
    });
};

export const setColorSuccess = (id, color) => ({
  type: SET_COLOR_SUCCESS,
  payload: {
    id,
    color,
  },
});

export const setColorFailure = (error) => ({
  type: SET_COLOR_FAILURE,
  payload: {
    error,
  },
});

export const setColorAction = (id, color) => (dispatch) => {
  axios
    .patch(`http://localhost:3004/tasks/${id}`, {
      color,
    })
    .then(() => {
      dispatch(setColorSuccess(id, color));
    })
    .catch((err) => {
      dispatch(setColorFailure(err.message));
    });
};
