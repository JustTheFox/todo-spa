import {
  FETCH_CURRENT_BOARD_STARTED,
  FETCH_CURRENT_BOARD_SUCCESS,
  FETCH_CURRENT_BOARD_FAILURE,
  TOGGLE_CURRENT_BOARD_SUCCESS,
  TOGGLE_CURRENT_BOARD_FAILURE,
  EDIT_CURRENT_BOARD_SUCCESS,
  EDIT_CURRENT_BOARD_FAILURE,
  DELETE_CURRENT_BOARD_SUCCESS,
  DELETE_CURRENT_BOARD_FAILURE,
} from '../const';

const initialState = {
  item: {},
  isFetching: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CURRENT_BOARD_STARTED:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_CURRENT_BOARD_SUCCESS:
      return {
        ...state,
        item: { ...payload },
        isFetching: false,
      };
    case FETCH_CURRENT_BOARD_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    case TOGGLE_CURRENT_BOARD_SUCCESS:
      return {
        ...state,
        item: {
          ...state.item,
          favorite: !state.item.favorite,
        },
      };
    case TOGGLE_CURRENT_BOARD_FAILURE:
      return {
        ...state,
        error: payload,
      };
    case EDIT_CURRENT_BOARD_SUCCESS:
      return {
        ...state,
        item: { ...payload },
      };
    case EDIT_CURRENT_BOARD_FAILURE:
      return {
        ...state,
        error: payload,
      };
    case DELETE_CURRENT_BOARD_SUCCESS:
      return {
        ...state,
        item: {},
        isFetching: false,
        error: '',
      };
    case DELETE_CURRENT_BOARD_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    default:
      return state;
  }
};
