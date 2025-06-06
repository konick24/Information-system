import { getTaskList } from "./components/render-list-task.js";
import { createTaskFilter } from "./components/filter-task.js";

const selectMain = document.querySelector('.task__select--main');
const selectSecondary = document.querySelector('.task__select--secondary');

createTaskFilter(selectMain.value);

selectMain.addEventListener('input', (evt) => {
  createTaskFilter(evt.target.value);
  getTaskList(evt.target.value.trim(), selectSecondary.value.trim());
});

selectSecondary.addEventListener('input', (evt) => getTaskList(selectMain.value.trim(), evt.target.value.trim()));
