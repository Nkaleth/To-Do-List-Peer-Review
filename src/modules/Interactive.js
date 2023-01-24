const ChangeTaskStatus = (arr, id) => {
  arr[id - 1].completed = !arr[id - 1].completed;
  return arr;
};

const clearList = (arr) => {
  const filtered = arr.filter((element) => !element.completed);
  return filtered;
};
export { ChangeTaskStatus, clearList };