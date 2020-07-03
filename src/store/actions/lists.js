import {
  FETCH_LISTS_STARTED,
  FETCH_LISTS_SUCCESS,
  FETCH_LISTS_FAILURE,
  CREATE_LIST_SUCCESS,
  CREATE_LIST_FAILURE,
  EDIT_LIST_SUCCESS,
  EDIT_LIST_FAILURE,
  DELETE_LIST_SUCCESS,
  DELETE_LIST_FAILURE,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
  EDIT_TASK_SUCCESS,
  EDIT_TASK_FAILURE,
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

export const createListSuccess = (list) => ({
  type: CREATE_LIST_SUCCESS,
  payload: list,
});

export const createListFailure = (error) => ({
  type: CREATE_LIST_FAILURE,
  payload: error,
});

export const createListAction = (list) => (dispatch) => {
  createList(list)
    .then(({ data }) => {
      dispatch(createListSuccess(data));
    })
    .catch(({ message }) => {
      dispatch(createListFailure(message));
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

export const editListAction = (id, params) => (dispatch) => {
  editList(id, params)
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

export const createTaskSuccess = (task) => ({
  type: CREATE_TASK_SUCCESS,
  payload: task,
});

export const createTaskFailure = (error) => ({
  type: CREATE_TASK_FAILURE,
  payload: error,
});

export const createTaskAction = (task) => (dispatch) => {
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

export const editTaskAction = (id, params) => (dispatch) => {
  editTask(id, params)
    .then(({ data }) => {
      dispatch(editTaskSuccess(data));
    })
    .catch(({ message }) => {
      dispatch(editTaskFailure(message));
    });
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
  deleteTask(taskId)
    .then(() => {
      dispatch(deleteTaskSuccess(listId, taskId));
    })
    .catch(({ message }) => {
      dispatch(deleteTaskFailure(message));
    });
};
