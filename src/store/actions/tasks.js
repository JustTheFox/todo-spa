import {
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  EDIT_TASK_SUCCESS,
  EDIT_TASK_FAILURE,
  TOGGLE_TASK_SUCCESS,
  TOGGLE_TASK_FAILURE,
} from '../const';

import {
  fetchTasks,
  createTask,
  editTask,
  deleteTask,
} from '../../services/api';

export const fetchTasksStart = () => ({
  type: FETCH_TASKS_STARTED,
});

export const fetchTasksSuccess = (tasks) => {
  return {
    type: FETCH_TASKS_SUCCESS,
    payload: tasks,
  };
};

export const fetchTasksFailure = (error) => {
  return {
    type: FETCH_TASKS_FAILURE,
    payload: error,
  };
};

export const fetchTasksAction = () => (dispatch) => {
  dispatch(fetchTasksStart());
  fetchTasks()
    .then(({ data }) => {
      dispatch(fetchTasksSuccess(data));
    })
    .catch(({ message }) => {
      dispatch(fetchTasksFailure(message));
    });
};

export const addTaskSuccess = (task) => ({
  type: ADD_TASK_SUCCESS,
  payload: task,
});

export const addTaskFailure = (error) => ({
  type: ADD_TASK_FAILURE,
  payload: error,
});

export const addTaskAction = (task) => (dispatch) => {
  dispatch(addTaskStart());
  createTask(task)
    .then(({ data }) => {
      dispatch(addTaskSuccess(data));
    })
    .catch(({ message }) => {
      dispatch(addTaskFailure(message));
    });
};

export const editTaskSuccess = (task) => ({
  type: EDIT_TASK_SUCCESS,
  payload: task,
});

export const editTaskFailure = (error) => ({
  type: EDIT_TASK_FAILURE,
  payload: error,
});

export const editTaskAction = (id, task) => (dispatch) => {
  editTask(id, task)
    .then(({ data }) => {
      dispatch(editTaskSuccess(data));
    })
    .catch(({ message }) => {
      dispatch(editTaskFailure(message));
    });
};

export const toggleTaskSuccess = (id) => ({
  type: TOGGLE_TASK_SUCCESS,
  payload: id,
});

export const toggleTaskFailure = (error) => ({
  type: TOGGLE_TASK_FAILURE,
  payload: error,
});

export const toggleTaskAction = (id, state) => (dispatch) => {
  editTask(id, {
    done: !state,
  })
    .then(() => {
      dispatch(toggleTaskSuccess(id));
    })
    .catch(({ message }) => {
      dispatch(toggleTaskFailure(message));
    });
};

export const deleteTaskStart = () => {
  return {
    type: DELETE_TASK_STARTED,
  };
};

export const deleteTaskSuccess = (id) => {
  return {
    type: DELETE_TASK_SUCCESS,
    payload: id,
  };
};

export const deleteTaskFailure = (error) => {
  return {
    type: DELETE_TASK_FAILURE,
    payload: error,
  };
};

export const deleteTaskAction = (id) => (dispatch) => {
  deleteTask(id)
    .then(() => {
      dispatch(deleteTasksSuccess(id));
    })
    .catch(({ message }) => {
      dispatch(deleteTasksFailure(message));
    });
};
