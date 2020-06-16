import axios from 'axios';
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

export const fetchListsStart = () => {
  return {
    type: FETCH_LISTS_STARTED,
  };
};

export const fetchListsSuccess = (lists) => {
  return {
    type: FETCH_LISTS_SUCCESS,
    payload: lists,
  };
};

export const fetchListsFailure = (error) => {
  return {
    type: FETCH_LISTS_FAILURE,
    payload: error,
  };
};

export const fetchLists = (boardId) => (dispatch) => {
  dispatch(fetchListsStart());
  axios
    .get(
      `http://localhost:3004/lists?boardId=${boardId}&_embed=tasks&_sort=id&_order=asc`,
    )
    .then((res) => {
      dispatch(fetchListsSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchListsFailure(err.message));
    });
};

export const addListStart = () => ({
  type: ADD_LIST_STARTED,
});

export const addListSuccess = (list) => ({
  type: ADD_LIST_SUCCESS,
  payload: list,
});

export const addListFailure = (error) => ({
  type: ADD_LIST_FAILURE,
  payload: error,
});

export const addListAction = (list) => (dispatch) => {
  dispatch(addListStart());
  axios
    .post('http://localhost:3004/lists', list)
    .then(({ data }) => {
      dispatch(addListSuccess(data));
    })
    .catch((err) => {
      dispatch(addListFailure(err.message));
    });
};

export const deleteListStart = () => {
  return {
    type: DELETE_LIST_STARTED,
  };
};

export const deleteListSuccess = (list) => {
  return {
    type: DELETE_LIST_SUCCESS,
    payload: list,
  };
};

export const deleteListFailure = (error) => {
  return {
    type: DELETE_LIST_FAILURE,
    payload: error,
  };
};

export const deleteListAction = (id) => (dispatch) => {
  dispatch(deleteListStart());
  axios
    .delete(`http://localhost:3004/lists/${id}`)
    .then(() => {
      dispatch(deleteListSuccess(id));
    })
    .catch((err) => {
      dispatch(deleteListFailure(err.message));
    });
};
