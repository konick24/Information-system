import { SERVICE_WORKS } from "./data.js";
import { createId, onButtonFormRemove } from "./util.js";

const taskListElement = document.querySelector('.task__list');
const taskElement = document.querySelector('#task-item').content.querySelector('.task-item');
const getId = createId();

let servicesWork = [];

const createTaskList = (list) => {
  taskListElement.innerHTML = '';
  list.forEach((item) => {
    const taskElementCopy = taskElement.cloneNode(true);
    const heading = taskElementCopy.querySelector('.task-item__heading');
    const taskName = taskElementCopy.querySelector('.task-item__text--task-name');
    const dateStart = taskElementCopy.querySelector('.task-item__text--date-start');
    const dateEnd = taskElementCopy.querySelector('.task-item__text--date-end');
    const executor = taskElementCopy.querySelector('.task-item__text--executor');
    const component = taskElementCopy.querySelector('.task-item__text--component');
    const quantity = taskElementCopy.querySelector('.task-item__text--quantity');

    taskElementCopy.dataset.taskItemId = getId();

    heading.textContent = item['Задача'];
    taskName.textContent = item['Задача'];
    dateStart.textContent = item['Дата начала работы'];
    dateEnd.textContent = item['Дата конца работы'];
    executor.textContent = item['Исполнитель'];
    component.textContent = item['Деталь/Агрегат'];
    quantity.textContent = item['Количество'];

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
