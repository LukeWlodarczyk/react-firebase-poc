export const formatDate = (date) => {
  return `${`${date.getHours()}`.padStart(
    2,
    0
  )}:${`${date.getMinutes()}`.padStart(2, 0)}`;
};
