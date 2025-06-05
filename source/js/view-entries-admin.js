import { getSelectList } from "./components/util.js";
import { getEntryList } from "./components/render-list-entry.js";
import { selectParametrs } from "./components/constants.js";

const selectMain = document.querySelector('.entry__select--main');
const selectSecondary = document.querySelector('.entry__select--secondary');
const selectSecondaryClass = '.entry__select--secondary'

const selectParam = {
  'Тип ВС': selectParametrs.aircraftType,
  'Исполнитель': selectParametrs.executor,
  'Все': selectParametrs.default,
}

const createEntryFilter = (mainParam) => {
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

createEntryFilter(selectMain.value);

selectMain.addEventListener('input', (evt) => {
  createEntryFilter(evt.target.value);
  getEntryList(evt.target.value.trim(), selectSecondary.value.trim());
});

selectSecondary.addEventListener('input', (evt) => getEntryList(selectMain.value.trim(), evt.target.value.trim()));

export { createEntryFilter };
