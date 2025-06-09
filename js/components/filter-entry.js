import { getSelectList } from "./util.js";
import { selectParametrs } from "./constants.js";

const selectSecondary = document.querySelector('.entry__select--secondary');
const selectSecondaryClass = '.entry__select--secondary'

const selectParam = {
  'aircraft_type': selectParametrs.aircraftType,
  'technician': selectParametrs.executor,
  'Все': selectParametrs.default,
}

const createEntryFilter = (mainParam) => {
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

export { createEntryFilter };
