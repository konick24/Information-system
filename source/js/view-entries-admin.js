import { createSelectList } from "./components/util.js";
import { AIRCRAFT_TYPES, EMPLOYEES } from "./components/data.js";
import { getEntryList } from "./components/render-entry.js";

const selectMain = document.querySelector('.entry__select--main');
const selectSecondary = document.querySelector('.entry__select--secondary');

const selectParam = {
  'Тип ВС': ['aircraftType'],
  'Исполнитель': ['lastName', 'firstName'],
  'Все': [],
}

const createFilter = (mainParam) => {
  switch(mainParam) {
    case 'Тип ВС':
      selectSecondary.disabled = false;
      selectSecondary.innerHTML = '';
      createSelectList(selectSecondary, AIRCRAFT_TYPES, selectParam[mainParam]);
      break;
    case 'Исполнитель':
      selectSecondary.disabled = false;
      selectSecondary.innerHTML = '';
      createSelectList(selectSecondary, EMPLOYEES, selectParam[mainParam]);
      break;
    case 'Все':
      selectSecondary.innerHTML = '';
      selectSecondary.disabled = true;
      break;
    }
}

createFilter(selectMain.value);

selectMain.addEventListener('input', (evt) => {
  createFilter(evt.target.value);
  getEntryList(evt.target.value.trim(), selectSecondary.value.trim());
});

selectSecondary.addEventListener('input', (evt) => getEntryList(selectMain.value.trim(), evt.target.value.trim()));

export { createFilter };
