import {
  FETCH_LISTS_STARTED,
  FETCH_LISTS_SUCCESS,
  FETCH_LISTS_FAILURE,
  CREATE_LIST_SUCCESS,
  CREATE_LIST_FAILURE,
  EDIT_LIST_SUCCESS,
  EDIT_LIST_FAILURE,
  DELETE_LIST_SUCCESS,
  DELETE_LIST_FAILURE,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
  EDIT_TASK_SUCCESS,
  EDIT_TASK_FAILURE,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
} from '../const';

const initialState = {
  items: [],
  isFetching: false,
  error: null,
};

const editList = (state, payload) => {
  return state.items.map((list) => {
    if (list.id === payload.id) {
      return {
        ...list,
        ...payload,
      };
    } else return list;
  });
};

const addTask = (state, payload) =>
  state.items.map((list) => {
    if (list.id === payload.listId) {
      return {
        ...list,
        tasks: [...list.tasks, payload],
      };
    }
    return list;
  });

const editTask = (state, payload) => {
  return state.items.map((list) => {
    if (list.id === payload.listId) {
      const changedTask = list.tasks.map((task) => {
        if (task.id === payload.id) {
          return {
            ...payload,
          };
        }
        return task;
      });

      return {
        ...list,
        tasks: [...changedTask],
      };
    }
    return list;
  });
};

const deleteTask = (state, listId, taskId) => {
  return state.items.map((list) => {
    if (list.id === listId) return list.tasks.filter(({ id }) => id !== taskId);
    return list;
  });
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_LISTS_STARTED:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_LISTS_SUCCESS:
      return {
        ...state,
        items: [...payload],
        isFetching: false,
      };
    case FETCH_LISTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    case CREATE_LIST_SUCCESS:
      return {
        ...state,
        items: [
          ...state.items,
          {
            ...payload,
            tasks: [],
          },
        ],
      };
    case CREATE_LIST_FAILURE:
      return {
        ...state,
        error: payload,
      };
    case EDIT_LIST_SUCCESS:
      return {
        ...state,
        items: [...editList(state, payload)],
      };
    case EDIT_LIST_FAILURE:
      return {
        ...state,
        error: payload,
      };
    case DELETE_LIST_SUCCESS:
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== payload),
      };
    case DELETE_LIST_FAILURE:
      return {
        ...state,
        error: payload,
      };
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        items: [...addTask(state, payload)],
      };
    case CREATE_TASK_FAILURE:
      return {
        ...state,
        error: payload,
      };
    case EDIT_TASK_SUCCESS:
      return {
        ...state,
        items: [...editTask(state, payload)],
      };
    case EDIT_TASK_FAILURE:
      return {
        ...state,
        error: payload,
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        ...deleteTask(state, payload.listId, payload.taskId),
      };
    case DELETE_TASK_FAILURE:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
