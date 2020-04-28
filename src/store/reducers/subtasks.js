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

const initialState = {
  list: [],
  loading: false,
  error: '',
};

const toggleTask = (state, payload) => ({
  ...state,
  list: state.list.map((task) => {
    const { id, done } = task;
    if (id === payload) {
      return {
        ...task,
        done: !done,
      };
    }
    return task;
  }),
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SUBTASKS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUBTASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [...payload],
      };
    case FETCH_SUBTASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case ADD_SUBTASKS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case ADD_SUBTASKS_SUCCESS:
      return {
        ...state,
        list: [payload, ...state.list],
        loading: false,
      };
    case ADD_SUBTASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case TOGGLE_SUBTASK_SUCCESS:
      return toggleTask(state, payload);
    case TOGGLE_SUBTASK_FAILURE:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
