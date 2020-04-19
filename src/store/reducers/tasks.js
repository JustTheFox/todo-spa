import { v4 } from 'uuid';
import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, LIKE_TASK } from '../const';

const initialState = [
  {
    id: v4(),
    title: 'Create App',
    description: 'Cоздаем первое SPA :)',
    timestamp: 1587228097274,
    done: false,
    postponed: false,
    liked: false,
  },
  {
    id: v4(),
    title: 'Что нужно сделать',
    description:
      'Базовый UI/UX; Фильтрация по параметрам: все, активные, завершенные; Возможность создавать список; Поиск по заголовкам; Вывести initialState в мок и ссимулировать запрос;',
    timestamp: 1587228097274,
    done: false,
    postponed: false,
    liked: true,
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

const likeTask = (state, payload) => {
  return state.map((task) => {
    const { id, liked } = task;
    if (id === payload) {
      return {
        ...task,
        liked: !liked,
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
    case LIKE_TASK:
      return likeTask(state, payload);
    default:
      return state;
  }
};
