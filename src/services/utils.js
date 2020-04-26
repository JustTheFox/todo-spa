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
