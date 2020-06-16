import {
  FETCH_LISTS_STARTED,
  FETCH_LISTS_SUCCESS,
  FETCH_LISTS_FAILURE,
  ADD_LIST_STARTED,
  ADD_LIST_SUCCESS,
  ADD_LIST_FAILURE,
  DELETE_LIST_STARTED,
  DELETE_LIST_SUCCESS,
  DELETE_LIST_FAILURE,
} from '../const';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_LISTS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: [...payload],
      };
    case FETCH_LISTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case ADD_LIST_STARTED:
      return {
        ...state,
        loading: true,
      };
    case ADD_LIST_SUCCESS:
      return {
        ...state,
        items: [payload, ...state.items],
        loading: false,
      };
    case ADD_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case DELETE_LIST_STARTED:
      return {
        ...state,
        loading: true,
      };
    case DELETE_LIST_SUCCESS:
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== payload),
        loading: false,
        error: '',
      };
    case DELETE_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
