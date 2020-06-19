import {
  FETCH_LISTS_STARTED,
  FETCH_LISTS_SUCCESS,
  FETCH_LISTS_FAILURE,
  ADD_LIST_STARTED,
  ADD_LIST_SUCCESS,
  ADD_LIST_FAILURE,
  EDIT_BOARD_STARTED,
  EDIT_BOARD_SUCCESS,
  EDIT_BOARD_FAILURE,
  DELETE_LIST_STARTED,
  DELETE_LIST_SUCCESS,
  DELETE_LIST_FAILURE,
  ADD_TASK_STARTED,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  EDIT_TASK_STARTED,
  EDIT_TASK_SUCCESS,
  EDIT_TASK_FAILURE,
  TOGGLE_TASK_STARTED,
  TOGGLE_TASK_SUCCESS,
  TOGGLE_TASK_FAILURE,
  DELETE_TASK_STARTED,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
} from '../const';

const initialState = {
  items: {},
  isFetching: false,
  errorMessage: null,
};

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
        ...payload,
        isFetching: false,
      };
    case FETCH_LISTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload,
      };
    case ADD_LIST_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case ADD_LIST_FAILURE:
      return {
        ...state,
        errorMessage: payload,
      };
    case DELETE_LIST_SUCCESS:
      return {
        ...state,
        lists: state.lists.filter(({ id }) => id !== payload),
        errorMessage: '',
      };
    case DELETE_LIST_FAILURE:
      return {
        ...state,
        errorMessage: payload,
      };
    default:
      return state;
  }
};
