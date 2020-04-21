import { SET_SEARCH_VALUE } from '../const';

export default (state = '', { type, payload }) => {
  switch (type) {
    case SET_SEARCH_VALUE:
      return payload;
    default:
      return state;
  }
};
