import {
  FETCH_COLORS_STARTED,
  FETCH_COLORS_SUCCESS,
  FETCH_COLORS_FAILURE,
} from '../const';
import { fetchColors } from '../../services/api';

export const fetchColorsStart = () => {
  return {
    type: FETCH_COLORS_STARTED,
  };
};

export const fetchColorsSuccess = (data) => {
  return {
    type: FETCH_COLORS_SUCCESS,
    payload: data,
  };
};

export const fetchColorsFailure = (error) => {
  return {
    type: FETCH_COLORS_FAILURE,
    payload: error,
  };
};

export const fetchColorsAction = () => (dispatch) => {
  dispatch(fetchColorsStart());
  fetchColors()
    .then(({ data }) => {
      dispatch(fetchColorsSuccess(data));
    })
    .catch(({ message }) => {
      dispatch(fetchColorsFailure(message));
    });
};
