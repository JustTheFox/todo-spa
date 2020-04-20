import { SET_FILTER } from '../const';
import { FILTERS } from '../actions';

export default (state = FILTERS.SHOW_ALL, { type, payload }) => {
  switch (type) {
    case SET_FILTER:
      return payload;
    default:
      return state;
  }
};
