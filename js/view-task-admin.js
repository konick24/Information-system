import { getSelectList } from "./components/util.js";
import { getTaskList } from "./components/render-list-task.js";
import { selectParametrs } from "./components/constants.js";

const selectMain = document.querySelector('.task__select--main');
const selectSecondary = document.querySelector('.task__select--secondary');
const selectSecondaryClass = '.task__select--secondary'

const selectParam = {
  'Тип ВС': selectParametrs.aircraftType,
  'Исполнитель': selectParametrs.executor,
  'Все': selectParametrs.default,
}

const createTaskFilter = (mainParam) => {
  selectSecondary.disabled = false;
  selectSecondary.innerHTML = '';
  switch(mainParam) {
    case 'Тип ВС':
      getSelectList(selectSecondaryClass, selectParam[mainParam]);
      break;
    case 'Исполнитель':
      getSelectList(selectSecondaryClass, selectParam[mainParam]);
      break;
    case 'Все':
      selectSecondary.disabled = true;
      break;
    }
}

createTaskFilter(selectMain.value);

selectMain.addEventListener('input', (evt) => {
  createTaskFilter(evt.target.value);
  getTaskList(evt.target.value.trim(), selectSecondary.value.trim());
});

selectSecondary.addEventListener('input', (evt) => getTaskList(selectMain.value.trim(), evt.target.value.trim()));

export { createTaskFilter };
