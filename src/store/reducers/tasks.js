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
  TOGGLE_TASK,
  LIKE_TASK,
  TOGGLE_LIST_ITEM,
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

const toggleListItem = (state, { taskId, itemId }) => {
  const [{ list }] = state.taskList.filter(({ id }) => id === taskId);

  const copyList = list.map((item) => {
    const { id, done } = item;
    if (id === itemId) {
      return {
        ...item,
        done: !done,
      };
    }
    return item;
  });

  return {
    ...state,
    taskList: state.taskList.map((task) => {
      const { id } = task;
      if (id === taskId) {
        return {
          ...task,
          list: copyList,
        };
      }
      return task;
    }),
  };
};

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
    case TOGGLE_TASK:
      return toggleTask(state, payload);
    case LIKE_TASK:
      return likeTask(state, payload);
    case TOGGLE_LIST_ITEM:
      return toggleListItem(state, payload);
    default:
      return state;
  }
};
