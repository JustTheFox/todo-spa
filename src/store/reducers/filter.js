import { SET_FILTER, FILTERS } from '../const';

export default (state = FILTERS.SHOW_ALL, { type, payload }) => {
  switch (type) {
    case SET_FILTER:
      return payload;
    default:
      return state;
  }
};
