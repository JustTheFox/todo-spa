import axios from 'axios';
import {
  FETCH_SUBTASKS_STARTED,
  FETCH_SUBTASKS_SUCCESS,
  FETCH_SUBTASKS_FAILURE,
  ADD_SUBTASKS_STARTED,
  ADD_SUBTASKS_SUCCESS,
  ADD_SUBTASKS_FAILURE,
  TOGGLE_SUBTASK_STARTED,
  TOGGLE_SUBTASK_SUCCESS,
  TOGGLE_SUBTASK_FAILURE,
} from '../const';

export const fetchSubTasksStart = () => {
  return {
    type: FETCH_SUBTASKS_STARTED,
  };
};

export const fetchSubTasksSuccess = (subtasks) => {
  return {
    type: FETCH_SUBTASKS_SUCCESS,
    payload: subtasks,
  };
};

export const fetchSubTasksFailure = (err) => {
  return {
    type: FETCH_SUBTASKS_FAILURE,
    error: err,
  };
};

export const fetchSubTasks = () => (dispatch) => {
  dispatch(fetchSubTasksStart());
  axios
    .get('http://localhost:3004/subtasks')
    .then((res) => {
      dispatch(fetchSubTasksSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchSubTasksFailure(err.message));
    });
};

// export const toggleSubTaskSuccess = (id) => ({
//   type: TOGGLE_SUBTASK_SUCCESS,
//   payload: id,
// });
//
// export const toggleSubTaskFailure = (error) => ({
//   type: TOGGLE_SUBTASK_FAILURE,
//   payload: {
//     error,
//   },
// });
//
// export const toggleSubTaskAction = (id, state) => {
//   return (dispatch) => {
//     axios
//       .patch(`http://localhost:3004/tasks/${id}`, {
//         done: !state,
//       })
//       .then(() => {
//         dispatch(toggleSubTaskSuccess(id));
//       })
//       .catch((err) => {
//         dispatch(toggleSubTaskFailure(err.message));
//       });
//   };
// };
//
// export const toggleSubtaskAction = (taskId, itemId) => ({
//   type: TOGGLE_LIST_ITEM_SUCCESS,
//   payload: {
//     taskId,
//     itemId,
//   },
// });
