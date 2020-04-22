import { v4 } from 'uuid';
import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  LIKE_TASK,
  TOGGLE_LIST_ITEM,
} from '../const';

const initialState = [
  {
    id: v4(),
    title: 'Create App',
    description: 'Cоздаем первое SPA :)',
    list: [],
    timestamp: 1587228097274,
    done: false,
    postponed: false,
    liked: false,
  },
  {
    id: v4(),
    title: 'Что нужно сделать',
    description: 'Подзадачи:',
    list: [
      {
        id: 1,
        title: 'Базовый UI/UX;',
        done: true,
      },
      {
        id: 2,
        title: 'Фильтрация по параметрам: все, активные, завершенные;',
        done: true,
      },
      {
        id: 3,
        title: 'Возможность создавать список;',
        done: true,
      },
      {
        id: 4,
        title: 'Поиск по заголовкам и описанию;',
        done: true,
      },
      {
        id: 5,
        title: 'Вывести initialState в мок и ссимулировать запрос;',
        done: false,
      },
    ],
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

const toggleListItem = (state, { taskId, itemId }) => {
  const [{ list }] = state.filter(({ id }) => id === taskId);

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

  return state.map((task) => {
    const { id } = task;
    if (id === taskId) {
      return {
        ...task,
        list: copyList,
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
    case TOGGLE_LIST_ITEM:
      return toggleListItem(state, payload);
    default:
      return state;
  }
};
