import { SERVICE_WORKS } from "./data.js";
import { onButtonFormRemove, onFormItemSubmit } from "./util.js";

const taskListElement = document.querySelector('.task__list');
const taskElement = document.querySelector('#task-item').content.querySelector('.task-item');

let servicesWork = [];

const createTaskList = (list) => {
  taskListElement.innerHTML = '';
  list.forEach((item) => {
    const taskElementCopy = taskElement.cloneNode(true);
    const heading = taskElementCopy.querySelector('.task-item__heading');
    const taskName = taskElementCopy.querySelector('.task-name__text--name');
    const dateStart = taskElementCopy.querySelector('.date__text--start');
    const dateEnd = taskElementCopy.querySelector('.date__text--end');
    const executor = taskElementCopy.querySelector('.executor__text--name');
    const component = taskElementCopy.querySelector('.component__text--name');
    const quantity = taskElementCopy.querySelector('.component__text--quantity');
    const form = taskElementCopy.querySelector('.form');

    taskElementCopy.dataset.taskItemId = item.idServiceWork;
    heading.textContent = `${item.technician} - ${item.task}`;
    taskName.textContent = item.task;
    dateStart.textContent = item.date_start;
    dateEnd.textContent = item.date_end;
    executor.textContent = item.technician;
    component.textContent = item.part_unit;
    quantity.textContent = item.quantity;

    onFormItemSubmit(form, SERVICE_WORKS, 'Завершено');

    taskListElement.insertAdjacentElement('beforeend', taskElementCopy);
  })
  servicesWork = [];
}

const getTaskList = (mainParam = '', secondaryParam = '') => {
  if (mainParam && secondaryParam) {
    SERVICE_WORKS.forEach((serviceWork) => {
      if (serviceWork[mainParam] === secondaryParam) {
        servicesWork.push(serviceWork);
    }
  })
  } else {
    servicesWork = [...SERVICE_WORKS];
  }
  createTaskList(servicesWork);
}

taskListElement.addEventListener('click', onButtonFormRemove);

export { getTaskList };
