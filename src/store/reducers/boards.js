import {
  FETCH_BOARDS_STARTED,
  FETCH_BOARDS_SUCCESS,
  FETCH_BOARDS_FAILURE,
  CREATE_BOARD_STARTED,
  CREATE_BOARD_SUCCESS,
  CREATE_BOARD_FAILURE,
  DELETE_BOARD_STARTED,
  DELETE_BOARD_SUCCESS,
  DELETE_BOARD_FAILURE,
} from '../const';

const initialState = {
  items: [],
  isFetching: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_BOARDS_STARTED:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_BOARDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: [...payload],
      };
    case FETCH_BOARDS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    case CREATE_BOARD_STARTED:
      return {
        ...state,
        isFetching: true,
      };
    case CREATE_BOARD_SUCCESS:
      return {
        ...state,
        items: [...state.items, payload],
        isFetching: false,
      };
    case CREATE_BOARD_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    case DELETE_BOARD_STARTED:
      return {
        ...state,
        isFetching: true,
      };
    case DELETE_BOARD_SUCCESS:
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== payload),
        isFetching: false,
        error: '',
      };
    case DELETE_BOARD_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    default:
      return state;
  }
};
