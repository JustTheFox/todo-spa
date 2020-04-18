export const parseDate = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const normalizeMonth = month < 10 ? `0${month}` : month;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return {
    date: `${day}-${normalizeMonth}-${year}`,
    time: `${hours}:${minutes}`,
  };
};