import {
  FETCH_BOARDS_STARTED,
  FETCH_BOARDS_SUCCESS,
  FETCH_BOARDS_FAILURE,
  CREATE_BOARD_STARTED,
  CREATE_BOARD_SUCCESS,
  CREATE_BOARD_FAILURE,
  TOGGLE_BOARD_SUCCESS,
  TOGGLE_BOARD_FAILURE,
} from '../const';
import { fetchBoards, createBoard, editBoard } from '../../services/api';

export const fetchBoardsStart = () => {
  return {
    type: FETCH_BOARDS_STARTED,
  };
};

export const fetchBoardsSuccess = (data) => {
  return {
    type: FETCH_BOARDS_SUCCESS,
    payload: data,
  };
};

export const fetchBoardsFailure = (error) => {
  return {
    type: FETCH_BOARDS_FAILURE,
    payload: error,
  };
};

export const fetchBoardsAction = () => (dispatch) => {
  dispatch(fetchBoardsStart());
  fetchBoards()
    .then(({ data }) => {
      dispatch(fetchBoardsSuccess(data));
    })
    .catch(({ message }) => {
      dispatch(fetchBoardsFailure(message));
    });
};

export const createBoardStart = () => ({
  type: CREATE_BOARD_STARTED,
});

export const createBoardSuccess = (data) => ({
  type: CREATE_BOARD_SUCCESS,
  payload: data,
});

export const createBoardFailure = (error) => ({
  type: CREATE_BOARD_FAILURE,
  payload: error,
});

export const createBoardAction = (board) => (dispatch) => {
  dispatch(createBoardStart());
  createBoard(board)
    .then(({ data }) => {
      dispatch(createBoardSuccess(data));
    })
    .catch(({ message }) => {
      dispatch(createBoardFailure(message));
    });
};

export const toggleBoardSuccess = (id) => ({
  type: TOGGLE_BOARD_SUCCESS,
  payload: id,
});

export const toggleBoardFailure = (error) => ({
  type: TOGGLE_BOARD_FAILURE,
  payload: error,
});

export const toggleBoardAction = (id, params) => (dispatch) => {
  editBoard(id, {
    ...params,
    favorite: !params.favorite,
  })
    .then(() => {
      dispatch(toggleBoardSuccess(id));
    })
    .catch(({ message }) => {
      dispatch(toggleBoardFailure(message));
    });
};
