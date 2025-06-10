import { MAINTENANCE, SERVICE_WORKS } from "./data.js";

const taskListElement = document.querySelector('.report__list');
const taskElement = document.querySelector('#item-task').content.querySelector('.report-item');

const createReportList = () => {
  SERVICE_WORKS.forEach((item, index) => {
    const taskElementCopy = taskElement.cloneNode(true);
    // console.log(taskElementCopy);

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
}

export { createReportList }
