import { getSelectList } from "./util.js";
import { selectParametrs } from "./constants.js";

const selectSecondary = document.querySelector('.task__select--secondary');
const selectSecondaryClass = '.task__select--secondary'

const selectParam = {
  'aircraft_type': selectParametrs.aircraftType,
  'technician': selectParametrs.executor,
  'Все': selectParametrs.default,
}

const createTaskFilter = (mainParam) => {
  selectSecondary.disabled = false;
  selectSecondary.innerHTML = '';
  switch(mainParam) {
    case 'aircraft_type':
      getSelectList(selectSecondaryClass, selectParam[mainParam]);
      break;
    case 'technician':
      getSelectList(selectSecondaryClass, selectParam[mainParam]);
      break;
    case 'Все':
      selectSecondary.disabled = true;
      break;
    }
}

export { createTaskFilter };
