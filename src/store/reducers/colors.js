import {
  FETCH_COLORS_STARTED,
  FETCH_COLORS_SUCCESS,
  FETCH_COLORS_FAILURE,
} from '../const';

const initialState = {
  items: [],
  isFetching: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COLORS_STARTED:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_COLORS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: [...payload],
      };
    case FETCH_COLORS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    default:
      return state;
  }
};
