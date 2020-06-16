import axios from 'axios';
import {
  FETCH_COLORS_STARTED,
  FETCH_COLORS_SUCCESS,
  FETCH_COLORS_FAILURE,
} from '../const';

export const fetchColorsStart = () => {
  return {
    type: FETCH_COLORS_STARTED,
  };
};

export const fetchColorsSuccess = (lists) => {
  return {
    type: FETCH_COLORS_SUCCESS,
    payload: lists,
  };
};

export const fetchColorsFailure = (error) => {
  return {
    type: FETCH_COLORS_FAILURE,
    payload: error,
  };
};

export const fetchColors = () => (dispatch) => {
  dispatch(fetchColorsStart());
  axios
    .get('http://localhost:3004/colors?_sort=id&_order=asc')
    .then((res) => {
      dispatch(fetchColorsSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchColorsFailure(err.message));
    });
};
