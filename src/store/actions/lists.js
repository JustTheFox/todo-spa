import {
  FETCH_LISTS_STARTED,
  FETCH_LISTS_SUCCESS,
  FETCH_LISTS_FAILURE,
  ADD_LIST_SUCCESS,
  ADD_LIST_FAILURE,
  EDIT_LIST_SUCCESS,
  EDIT_LIST_FAILURE,
  DELETE_LIST_SUCCESS,
  DELETE_LIST_FAILURE,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  EDIT_TASK_SUCCESS,
  EDIT_TASK_FAILURE,
  TOGGLE_TASK_SUCCESS,
  TOGGLE_TASK_FAILURE,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
} from '../const';
import {
  fetchLists,
  createList,
  editList,
  deleteList,
  createTask,
  editTask,
  deleteTask,
} from '../../services/api';

export const fetchListsStart = () => ({
  type: FETCH_LISTS_STARTED,
});

export const fetchListsSuccess = (lists) => {
  return {
    type: FETCH_LISTS_SUCCESS,
    payload: lists,
  };
};

export const fetchListsFailure = (error) => {
  return {
    type: FETCH_LISTS_FAILURE,
    payload: error,
  };
};

export const fetchListsAction = (boardId) => (dispatch) => {
  dispatch(fetchListsStart());
  fetchLists(boardId)
    .then(({ data }) => {
      dispatch(fetchListsSuccess(data));
    })
    .catch(({ message }) => {
      dispatch(fetchListsFailure(message));
    });
};

export const addListSuccess = (list) => ({
  type: ADD_LIST_SUCCESS,
  payload: list,
});

export const addListFailure = (error) => ({
  type: ADD_LIST_FAILURE,
  payload: error,
});

export const addListAction = (list) => (dispatch) => {
  createList(list)
    .then(({ data }) => {
      dispatch(addListSuccess(data));
    })
    .catch(({ message }) => {
      dispatch(addListFailure(message));
    });
};

export const editListSuccess = (list) => ({
  type: EDIT_LIST_SUCCESS,
  payload: list,
});

export const editListFailure = (error) => ({
  type: EDIT_LIST_FAILURE,
  payload: error,
});

export const editListAction = (id) => (dispatch) => {
  editList(id)
    .then(({ data }) => {
      dispatch(editListSuccess(data));
    })
    .catch(({ message }) => {
      dispatch(editListFailure(message));
    });
};

export const deleteListSuccess = (list) => {
  return {
    type: DELETE_LIST_SUCCESS,
    payload: list,
  };
};

export const deleteListFailure = (error) => {
  return {
    type: DELETE_LIST_FAILURE,
    payload: error,
  };
};

export const deleteListAction = (id) => (dispatch) => {
  deleteList(id)
    .then(() => {
      dispatch(deleteListSuccess(id));
    })
    .catch(({ message }) => {
      dispatch(deleteListFailure(message));
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
  dispatch(deleteTasksStart());
  deleteTask(id)
    .then(() => {
      dispatch(deleteTasksSuccess(id));
    })
    .catch(({ message }) => {
      dispatch(deleteTasksFailure(message));
    });
};
