import {
  FETCH_COLORS_STARTED,
  FETCH_COLORS_SUCCESS,
  FETCH_COLORS_FAILURE,
} from '../const';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COLORS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COLORS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: [...payload],
      };
    case FETCH_COLORS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
