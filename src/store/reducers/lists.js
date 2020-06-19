import {
  FETCH_LISTS_STARTED,
  FETCH_LISTS_SUCCESS,
  FETCH_LISTS_FAILURE,
  CREATE_LIST_SUCCESS,
  CREATE_LIST_FAILURE,
  EDIT_BOARD_SUCCESS,
  EDIT_BOARD_FAILURE,
  DELETE_LIST_SUCCESS,
  DELETE_LIST_FAILURE,
  CREATE_TASK_STARTED,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
  EDIT_TASK_SUCCESS,
  EDIT_TASK_FAILURE,
  TOGGLE_TASK_SUCCESS,
  TOGGLE_TASK_FAILURE,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
} from '../const';

const initialState = {
  items: [],
  isFetching: false,
  errorMessage: null,
};

const toggleTask = (state, listId, taskId) =>
  state.items.map((list) => {
    if (list.id !== listId) return list;

    list.tasks.map((task) => {
      if (task.id !== taskId) return task;

      return {
        ...task,
        done: !task.done,
      };
    });
  });

const deleteTask = (state, listId, taskId) =>
  state.items.map((list) => {
    if (list.id !== listId) return list;
    return list.tasks.filter(({ id }) => id !== taskId);
  });

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_LISTS_STARTED:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_LISTS_SUCCESS:
      return {
        ...state,
        items: [...payload],
        isFetching: false,
      };
    case FETCH_LISTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload,
      };
    case CREATE_LIST_SUCCESS:
      return {
        ...state,
        items: [...state.items, payload],
      };
    case CREATE_LIST_FAILURE:
      return {
        ...state,
        errorMessage: payload,
      };
    case DELETE_LIST_SUCCESS:
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== payload),
      };
    case DELETE_LIST_FAILURE:
      return {
        ...state,
        errorMessage: payload,
      };
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        items: [...state.items, payload],
      };
    case CREATE_TASK_FAILURE:
      return {
        ...state,
        errorMessage: payload,
      };
    case TOGGLE_TASK_SUCCESS:
      return toggleTask(state, payload);
    case TOGGLE_TASK_FAILURE:
      return {
        ...state,
        errorMessage: payload,
      };
    case DELETE_TASK_SUCCESS:
      return deleteTask(state, payload.listId, payload.taskId);
    case DELETE_TASK_FAILURE:
      return {
        ...state,
        errorMessage: payload,
      };

    default:
      return state;
  }
};
