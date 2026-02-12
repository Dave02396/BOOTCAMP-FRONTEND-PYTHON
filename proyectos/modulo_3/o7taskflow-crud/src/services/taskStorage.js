const KEY = "tasks";

export const getTasks = () =>
  JSON.parse(localStorage.getItem(KEY)) || [];

export const saveTasks = (tasks) =>
  localStorage.setItem(KEY, JSON.stringify(tasks));

export const getTasksAsync = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(getTasks());
    }, 500);
  });
