import {
  FETCH_BOARDS_STARTED,
  FETCH_BOARDS_SUCCESS,
  FETCH_BOARDS_FAILURE,
  ADD_BOARD_STARTED,
  ADD_BOARD_SUCCESS,
  ADD_BOARD_FAILURE,
  DELETE_BOARD_STARTED,
  DELETE_BOARD_SUCCESS,
  DELETE_BOARD_FAILURE,
} from '../const';

const initialState = {
  boards: [],
  loading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_BOARDS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BOARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        boards: [...payload],
      };
    case FETCH_BOARDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case ADD_BOARD_STARTED:
      return {
        ...state,
        loading: true,
      };
    case ADD_BOARD_SUCCESS:
      return {
        ...state,
        boards: [payload, ...state.boards],
        loading: false,
      };
    case ADD_BOARD_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case DELETE_BOARD_STARTED:
      return {
        ...state,
        loading: true,
      };
    case DELETE_BOARD_SUCCESS:
      return {
        ...state,
        boards: state.boards.filter(({ id }) => id !== payload),
        loading: false,
        error: '',
      };
    case DELETE_BOARD_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
