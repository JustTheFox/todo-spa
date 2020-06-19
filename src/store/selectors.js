export const getList = (state, id) => state.lists[id];

export const getTasksForList = (state, id) => {
  const tasksIds = state.lists[id].tasks;
  return state.lists.tasks.filter((t) => tasksIds.includes(t.id));
};
