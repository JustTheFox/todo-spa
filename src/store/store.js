import {createStore} from 'redux';
import {ADD_TASK, DELETE_TASK, TOGGLE_TASK, LIKE_TASK} from './const.js';
import uuid from 'uuid/v4';

const initialState =
    {tasks: [
        {
            id: uuid(),
            title: 'Create App',
            description: '...',
            completed: false,
            liked: false
        }
    ]}
;

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
        return {
          ...state,
          tasks: state.tasks.map((task) => task.id === payload ? { ...task, completed: task } : task)
        };
    case LIKE_TASK:
        return  {
           ...state,
           tasks: state.tasks.map((task) => task.id === payload ? { ...task, liked: task } : task)
         };
    default:
      return state
  }
}

export const store = createStore(reducer, initialState);
store.subscribe(()=>{console.log(store.getState())});