import {
  FETCH_TASKS_STARTED,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  ADD_TASK_STARTED,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  DELETE_TASK_STARTED,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  TOGGLE_TASK_STARTED,
  TOGGLE_TASK_SUCCESS,
  TOGGLE_TASK_FAILURE,
  LIKE_TASK_STARTED,
  LIKE_TASK_SUCCESS,
  LIKE_TASK_FAILURE,
} from '../const';

const initialState = {
  taskList: [],
  loading: false,
  error: '',
};

const toggleTask = (state, payload) => ({
  ...state,
  taskList: state.taskList.map((task) => {
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

const likeTask = (state, payload) => ({
  ...state,
  taskList: state.taskList.map((task) => {
    const { id, liked } = task;
    if (id === payload) {
      return {
        ...task,
        liked: !liked,
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
        loading: true,
      };
    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        taskList: [...payload],
      };
    case FETCH_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case ADD_TASK_STARTED:
      return {
        ...state,
        loading: true,
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        taskList: [payload, ...state.taskList],
        loading: false,
      };
    case ADD_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case DELETE_TASK_STARTED:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        taskList: state.taskList.filter(({ id }) => id !== payload),
        loading: false,
        error: '',
      };
    case DELETE_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case TOGGLE_TASK_STARTED:
    case TOGGLE_TASK_SUCCESS:
      return toggleTask(state, payload);
    case TOGGLE_TASK_FAILURE:
      return {
        ...state,
        error: payload,
      };
    case LIKE_TASK_STARTED:
    case LIKE_TASK_SUCCESS:
      return likeTask(state, payload);
    case LIKE_TASK_FAILURE:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
