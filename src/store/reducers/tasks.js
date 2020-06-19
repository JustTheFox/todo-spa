import {
  FETCH_TASKS_STARTED,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  TOGGLE_TASK_SUCCESS,
  TOGGLE_TASK_FAILURE,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
} from '../const';

const initialState = {
  items: [],
  isFetching: false,
  errorMessage: null,
};

const toggleTask = (state, payload) => ({
  ...state,
  items: state.items.map((task) => {
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
    case FETCH_TASKS_STARTED:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: [...payload],
      };
    case FETCH_TASKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload,
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        items: [payload, ...state.items],
      };
    case ADD_TASK_FAILURE:
      return {
        ...state,
        errorMessage: payload,
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== payload),
        errorMessage: null,
      };
    case DELETE_TASK_FAILURE:
      return {
        ...state,
        errorMessage: payload,
      };
    case TOGGLE_TASK_SUCCESS:
      return toggleTask(state, payload);
    case TOGGLE_TASK_FAILURE:
      return {
        ...state,
        errorMessage: payload,
      };
    default:
      return state;
  }
};
