import { SET_SEARCH_VALUE } from '../const';

export const setSearchValueAction = (value) => ({
  type: SET_SEARCH_VALUE,
  payload: value,
});
