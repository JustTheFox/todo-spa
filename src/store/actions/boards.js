import {
  FETCH_BOARDS_STARTED,
  FETCH_BOARDS_SUCCESS,
  FETCH_BOARDS_FAILURE,
  CREATE_BOARD_STARTED,
  CREATE_BOARD_SUCCESS,
  CREATE_BOARD_FAILURE,
  TOGGLE_BOARD_SUCCESS,
  TOGGLE_BOARD_FAILURE,
  DELETE_BOARD_STARTED,
  DELETE_BOARD_SUCCESS,
  DELETE_BOARD_FAILURE,
} from '../const';
import {
  fetchBoards,
  createBoard,
  editBoard,
  deleteBoard,
} from '../../services/api';

export const fetchBoardsStart = () => {
  return {
    type: FETCH_BOARDS_STARTED,
  };
};

export const fetchBoardsSuccess = (boards) => {
  return {
    type: FETCH_BOARDS_SUCCESS,
    payload: boards,
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

export const createBoardSuccess = (board) => ({
  type: CREATE_BOARD_SUCCESS,
  payload: board,
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

export const toggleBoardAction = (id, state) => (dispatch) => {
  editBoard(id, {
    favorite: !state,
  })
    .then(() => {
      dispatch(toggleBoardSuccess(id));
    })
    .catch(({ message }) => {
      dispatch(toggleBoardFailure(message));
    });
};

export const deleteBoardsStart = () => {
  return {
    type: DELETE_BOARD_STARTED,
  };
};

export const deleteBoardsSuccess = (board) => {
  return {
    type: DELETE_BOARD_SUCCESS,
    payload: board,
  };
};

export const deleteBoardsFailure = (error) => {
  return {
    type: DELETE_BOARD_FAILURE,
    payload: error,
  };
};

export const deleteBoardAction = (id) => (dispatch) => {
  dispatch(deleteBoardsStart());
  deleteBoard(id)
    .then(() => {
      dispatch(deleteBoardsSuccess(id));
    })
    .catch(({ message }) => {
      dispatch(deleteBoardsFailure(message));
    });
};
