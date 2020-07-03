const normalizeTime = (time) => (time < 10 ? `0${time}` : time);

export const parseDate = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = normalizeTime(date.getMonth() + 1);
  const day = date.getDate();
  const hours = normalizeTime(date.getHours());
  const minutes = normalizeTime(date.getMinutes());
  return {
    date: `${day}-${month}-${year}`,
    time: `${hours}:${minutes}`,
  };
};

export const normalizeFetchData = (data) => {
  const lists = data.reduce((acc, item) => {
    const tasks = item.tasks.map(({ id }) => id);
    return {
      ...acc,
      [item.id]: {
        ...item,
        tasks,
      },
    };
  }, {});

  const tasks = data.reduce((acc, item) => {
    if (item.tasks.length === 0) return acc;
    let taskObj = {};

    item.tasks.forEach((item) => {
      taskObj = {
        ...taskObj,
        [item.id]: {
          ...item,
        },
      };
    });

    return {
      ...acc,
      ...taskObj,
    };
  }, {});

  return {
    lists,
    tasks,
  };
};
