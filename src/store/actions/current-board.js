import {
  // FETCH_CURRENT_BOARD_COLOR_STARTED,
  FETCH_CURRENT_BOARD_COLOR_SUCCESS,
  FETCH_CURRENT_BOARD_COLOR_FAILURE,
  FETCH_CURRENT_BOARD_STARTED,
  FETCH_CURRENT_BOARD_SUCCESS,
  FETCH_CURRENT_BOARD_FAILURE,
  TOGGLE_CURRENT_BOARD_SUCCESS,
  TOGGLE_CURRENT_BOARD_FAILURE,
  EDIT_CURRENT_BOARD_SUCCESS,
  EDIT_CURRENT_BOARD_FAILURE,
  DELETE_CURRENT_BOARD_SUCCESS,
  DELETE_CURRENT_BOARD_FAILURE,
} from '../const';
import {
  fetchBoard,
  fetchColor,
  editBoard,
  deleteBoard,
} from '../../services/api';

// export const fetchBoardColorStart = () => {
//   return {
//     type: FETCH_CURRENT_BOARD_COLOR_STARTED,
//   };
// };

export const fetchBoardColorSuccess = (data) => {
  return {
    type: FETCH_CURRENT_BOARD_COLOR_SUCCESS,
    payload: data,
  };
};

export const fetchBoardColorFailure = (error) => {
  return {
    type: FETCH_CURRENT_BOARD_COLOR_FAILURE,
    payload: error,
  };
};

export const fetchBoardColorAction = (id) => (dispatch) => {
  // dispatch(fetchBoardStart());
  fetchColor(id)
    .then(({ data }) => {
      console.log(id, data);

      dispatch(fetchBoardColorSuccess(data));
    })
    .catch(({ message }) => {
      dispatch(fetchBoardColorFailure(message));
    });
};

export const fetchBoardStart = () => {
  return {
    type: FETCH_CURRENT_BOARD_STARTED,
  };
};

export const fetchBoardSuccess = (data) => {
  return {
    type: FETCH_CURRENT_BOARD_SUCCESS,
    payload: data,
  };
};

export const fetchBoardFailure = (error) => {
  return {
    type: FETCH_CURRENT_BOARD_FAILURE,
    payload: error,
  };
};

export const fetchBoardAction = (id) => (dispatch) => {
  dispatch(fetchBoardStart());
  fetchBoard(id)
    .then(({ data }) => {
      dispatch(fetchBoardSuccess(data));

      fetchColor(data.colorId)
        .then(({ data: colorData }) => {
          dispatch(fetchBoardColorSuccess(colorData));
        })
        .catch(({ message }) => {
          dispatch(fetchBoardColorFailure(message));
        });
    })
    .catch(({ message }) => {
      dispatch(fetchBoardFailure(message));
    });
};

export const toggleBoardSuccess = () => ({
  type: TOGGLE_CURRENT_BOARD_SUCCESS,
});

export const toggleBoardFailure = (error) => ({
  type: TOGGLE_CURRENT_BOARD_FAILURE,
  payload: error,
});

export const toggleBoardAction = (id, params) => (dispatch) => {
  editBoard(id, {
    ...params,
    favorite: !params.favorite,
  })
    .then(() => {
      dispatch(toggleBoardSuccess());
    })
    .catch(({ message }) => {
      dispatch(toggleBoardFailure(message));
    });
};

export const editBoardSuccess = (data) => ({
  type: EDIT_CURRENT_BOARD_SUCCESS,
  payload: data,
});

export const editBoardFailure = (error) => ({
  type: EDIT_CURRENT_BOARD_FAILURE,
  payload: error,
});

export const editBoardAction = (id, params) => (dispatch) => {
  editBoard(id, {
    ...params,
  })
    .then(({ data }) => {
      dispatch(editBoardSuccess(data));

      fetchColor(data.colorId)
        .then(({ data: colorData }) => {
          dispatch(fetchBoardColorSuccess(colorData));
        })
        .catch(({ message }) => {
          dispatch(fetchBoardColorFailure(message));
        });
    })
    .catch(({ message }) => {
      dispatch(editBoardFailure(message));
    });
};

export const deleteBoardsSuccess = (data) => {
  return {
    type: DELETE_CURRENT_BOARD_SUCCESS,
    payload: data,
  };
};

export const deleteBoardsFailure = (error) => {
  return {
    type: DELETE_CURRENT_BOARD_FAILURE,
    payload: error,
  };
};

export const deleteBoardAction = (id) => (dispatch) => {
  deleteBoard(id)
    .then(() => {
      dispatch(deleteBoardsSuccess());
    })
    .catch(({ message }) => {
      dispatch(deleteBoardsFailure(message));
    });
};
