import { FILTERS } from './actions';

export const getFilteredTasks = (tasks, filter) => {
  switch (filter) {
    case FILTERS.SHOW_ALL:
      return tasks;
    case FILTERS.SHOW_FAVORITE:
      return tasks.filter((t) => t.liked);
    case FILTERS.SHOW_ACTIVE:
      return tasks.filter((t) => !t.done);
    case FILTERS.SHOW_COMPLETED:
      return tasks.filter((t) => t.done);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};