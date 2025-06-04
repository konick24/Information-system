import { MAINTENANCE } from "./data.js";
import { createId, onButtonFormRemove } from "./util.js";

const entryListElement = document.querySelector('.entry__list');
const entryElement = document.querySelector('#entry-item').content.querySelector('.entry-item');
const getId = createId();

let maintenances = [];

const createEntryList = (list) => {
  entryListElement.innerHTML = '';
  list.forEach((item) => {
    const entryElementCopy = entryElement.cloneNode(true);
    const heading = entryElementCopy.querySelector('.entry-item__heading');
    const data = entryElementCopy.querySelector('.entry-item__text--date');
    const executor = entryElementCopy.querySelector('.entry-item__text--executor');
    const title = entryElementCopy.querySelector('.entry-item__text--title');
    const component = entryElementCopy.querySelector('.entry-item__text--component');
    const description = entryElementCopy.querySelector('.entry-item__text--description');

    entryElementCopy.dataset.entryItemId = getId();
    heading.textContent = `${item['Исполнитель']} - ${item['Тип ВС']}`
    data.textContent = item['Дата'];
    executor.textContent = item['Исполнитель'];
    title.textContent = item['Тип ВС'];
    component.textContent = item['Деталь/Агрегат'];
    if (item['Доп. Инф.']) {
      description.textContent = item['Доп. Инф.'];
    } else {
      description.textContent = 'Информация не предоставлена';
    }

    entryListElement.insertAdjacentElement('beforeend', entryElementCopy);
  })
  maintenances = [];
}

const getEntryList = (mainParam = '', secondaryParam = '') => {
  if (mainParam && secondaryParam) {
    MAINTENANCE.forEach((maintenance) => {
      if (maintenance[mainParam] === secondaryParam) {
        maintenances.push(maintenance);
    }
  })
  } else {
    maintenances = [...MAINTENANCE];
  }
  createEntryList(maintenances);
}

entryListElement.addEventListener('click', onButtonFormRemove);

export { getEntryList };
