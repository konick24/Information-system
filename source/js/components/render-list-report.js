import { MAINTENANCE, SERVICE_WORKS } from "./data.js";

const taskListElement = document.querySelector('.report__list');
const taskElement = document.querySelector('#item-task').content.querySelector('.report-item');

let serviceWork = [];

const createReportList = (list) => {
  const elements = taskListElement.querySelectorAll('.report-item');
  let deleteElement = false;
  elements.forEach((element) => {
    if (deleteElement) {
      element.remove();
    }
    if (element.id === 'header') {
      deleteElement = true;
    }
  })

  list.forEach((item, index) => {
    const taskElementCopy = taskElement.cloneNode(true);

    const aircraftType = taskElementCopy.querySelector('.report-item__text--aircraft-type');
    const board = taskElementCopy.querySelector('.report-item__text--board');
    const dateIdentification = taskElementCopy.querySelector('.report-item__text--date-identification');
    const dateStart = taskElementCopy.querySelector('.report-item__text--date-start');
    const dateEnd = taskElementCopy.querySelector('.report-item__text--date-end');
    const category = taskElementCopy.querySelector('.report-item__text--category');
    const technician = taskElementCopy.querySelector('.report-item__text--technician');
    const component = taskElementCopy.querySelector('.report-item__text--part-unit');
    const quantity = taskElementCopy.querySelector('.report-item__text--quantity');
    const dateEndFact = taskElementCopy.querySelector('.report-item__text--date-end-fact');
    const status = taskElementCopy.querySelector('.report-item__text--status');

    const maintenance = MAINTENANCE.find((maintenance) => maintenance.idMaintenance === index + 1);

    aircraftType.textContent = item.aircraft_type;
    board.textContent = item.board;
    dateIdentification.textContent = maintenance.date;
    dateStart.textContent = item.date_start;
    dateEnd.textContent = item.date_end;
    category.textContent = item.category;
    technician.textContent = item.technician;
    component.textContent = item.part_unit;
    quantity.textContent = item.quantity;
    dateEndFact.textContent = item.date_end_fact;
    status.textContent = item.status;

    taskListElement.insertAdjacentElement('beforeend', taskElementCopy);
  })
  serviceWork = [];
}

const getReportList = (mainParam = '', secondaryParam = '') => {
  if (mainParam && secondaryParam) {
    SERVICE_WORKS.forEach((item) => {
      if (item[mainParam] === secondaryParam) {
        serviceWork.push(item);
      }
    })
  } else {
    serviceWork = [...SERVICE_WORKS];
  }
  createReportList(serviceWork);
}

const getDate = (arr) => {
  const date = arr.split('-').map((item) => Number(item));
  return date;
};

const getReportListByDate = (dateStartString = '', dateEndString = '') => {
  if (dateStartString && dateEndString) {
    const dateStartFilter = getDate(dateStartString);
    const dateEndFilter = getDate(dateEndString);

    SERVICE_WORKS.forEach((item) => {
      const dateStart = getDate(item.date_start);

      if ((dateStart[2] >=  dateStartFilter[2] &&
        dateStart[2] <=  dateEndFilter[2] &&
        dateStart[1] >=  dateStartFilter[1]&&
        dateStart[1] <=  dateEndFilter[1] &&
        dateStart[0] >=  dateStartFilter[0]&&
        dateStart[0] <=  dateEndFilter[0])) {
        serviceWork.push(item);
      }
    })
    createReportList(serviceWork);
  }
}

export { getReportList, getReportListByDate }
