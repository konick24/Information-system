import { MAINTENANCE } from "./data.js";
import { onButtonFormRemove } from "./util.js";

const entryListElement = document.querySelector('.entry__list');
const entryElement = document.querySelector('#entry-item').content.querySelector('.entry-item');

let maintenances = [];

const createEntryList = (list) => {
  entryListElement.innerHTML = '';
  list.forEach((item) => {
    const entryElementCopy = entryElement.cloneNode(true);
    const heading = entryElementCopy.querySelector('.entry-item__heading');
    const data = entryElementCopy.querySelector('.entry-item__text--date');
    const executor = entryElementCopy.querySelector('.entry-item__text--executor');
    const title = entryElementCopy.querySelector('.entry-item__text--title');
    const board = entryElementCopy.querySelector('.entry-item__text--board');
    const component = entryElementCopy.querySelector('.entry-item__text--component');
    const description = entryElementCopy.querySelector('.entry-item__text--description');

    entryElementCopy.dataset.entryItemId = item.idMaintenance;
    heading.textContent = `${item.technician} - ${item.board}`
    data.textContent = item.date;
    executor.textContent = item.technician;
    title.textContent = item.aircraft_type;
    board.textContent = item.board;
    component.textContent = item.part_unit;
    if (item.additional_information) {
      description.textContent = item.additional_information;
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
