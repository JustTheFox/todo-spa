import {
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
  EDIT_TASK_SUCCESS,
  EDIT_TASK_FAILURE,
  TOGGLE_TASK_SUCCESS,
  TOGGLE_TASK_FAILURE,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
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

export const createTaskSuccess = (task) => ({
  type: CREATE_TASK_SUCCESS,
  payload: task,
});

export const createTaskFailure = (error) => ({
  type: CREATE_TASK_FAILURE,
  payload: error,
});

export const createTaskAction = (task) => (dispatch) => {
  dispatch(createTaskStart());
  createTask(task)
    .then(({ data }) => {
      dispatch(createTaskSuccess(data));
    })
    .catch(({ message }) => {
      dispatch(createTaskFailure(message));
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

export const toggleTaskSuccess = (listId, taskId) => ({
  type: TOGGLE_TASK_SUCCESS,
  payload: {
    listId,
    taskId,
  },
});

export const toggleTaskFailure = (error) => ({
  type: TOGGLE_TASK_FAILURE,
  payload: error,
});

export const toggleTaskAction = (listId, taskId, state) => (dispatch) => {
  editTask(taskId, {
    done: !state,
  })
    .then(() => {
      dispatch(toggleTaskSuccess(listId, taskId));
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

export const deleteTaskSuccess = (listId, taskId) => {
  return {
    type: DELETE_TASK_SUCCESS,
    payload: {
      listId,
      taskId,
    },
  };
};

export const deleteTaskFailure = (error) => {
  return {
    type: DELETE_TASK_FAILURE,
    payload: error,
  };
};

export const deleteTaskAction = (listId, taskId) => (dispatch) => {
  deleteTask(id)
    .then(() => {
      dispatch(deleteTaskSuccess(listId, taskId));
    })
    .catch(({ message }) => {
      dispatch(deleteTasksFailure(message));
    });
};
