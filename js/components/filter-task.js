import { getSelectList } from "./util.js";
import { selectParametrs } from "./constants.js";

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

export { createTaskFilter };
