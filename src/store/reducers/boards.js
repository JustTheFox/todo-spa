import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from '../const';

const initialState = [
  {
    id: 1,
    title: 'Create App',
    done: false,
  },
  {
    id: 2,
    title: 'Что нужно сделать',
    done: false,
  },
];

const toggleTask = (state, payload) => {
  return state.map((task) => {
    const { id, done } = task;
    if (id === payload) {
      return {
        ...task,
        done: !done,
      };
    }
    return task;
  });
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return [payload, ...state];
    case DELETE_TASK:
      return state.filter(({ id }) => id !== payload);
    case TOGGLE_TASK:
      return toggleTask(state, payload);
    default:
      return state;
  }
};
