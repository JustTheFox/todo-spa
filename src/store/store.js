import {createStore} from 'redux';
import {ADD_TASK, DELETE_TASK, TOGGLE_TASK, PUT_OFF_TASK, LIKE_TASK} from './const.js';
import uuid from 'uuid/v4';

const initialState =
    {tasks: [
        {
            id: uuid(),
            title: 'Create App',
            description: 'Cоздаем первое SPA :)',
            completed: false,
            postponed: false,
            liked: false
        }
    ]}
;

const toggleTask = (state, payload) => {
  const copy = state.tasks.map((task) => {
    const { id, completed } = task;
    if (id === payload ) {
      return {
        ...task,
        completed: !completed,
      }
    } return task;
  });
  return {
    ...state,
    tasks: copy
  }
};

const putOffTask = (state, payload) => {
  const copy = state.tasks.map((task) => {
    const { id, postponed } = task;
    if (id === payload ) {
      return {
        ...task,
        postponed: !postponed,
      }
    } return task;
  });
  return {
    ...state,
    tasks: copy
  }
};

const likeTask = (state, payload) => {
  const copy = state.tasks.map((task) => {
    const { id, liked } = task;
    if (id === payload ) {
      return {
        ...task,
        liked: !liked,
      }
    } return task;
  });
  return {
    ...state,
    tasks: copy
  }
};

const reducer = (state, {type, payload}) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
            ...state.tasks,
            payload
        ]
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(({id}) => id !== payload)
      };
    case TOGGLE_TASK:
      return toggleTask(state, payload);
    case PUT_OFF_TASK:
          return putOffTask(state, payload);
    case LIKE_TASK:
       return likeTask(state, payload);
    default:
      return state;
  }
}

export const store = createStore(reducer, initialState);
// store.subscribe(()=>{console.log(store.getState())});