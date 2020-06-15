import { SET_FILTER } from '../const';

export const filterTaskAction = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
