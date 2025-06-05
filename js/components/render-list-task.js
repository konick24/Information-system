import { SERVICE_WORKS } from "./data.js";
import { onButtonFormRemove, onFormItemSubmit } from "./util.js";

const taskListElement = document.querySelector('.task__list');
const taskElement = document.querySelector('#task-item').content.querySelector('.task-item');

let servicesWork = [];

// const onFormItemSubmit = (form, arr, message) => {
//   form.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//     const id = evt.target.closest('.item').dataset.taskItemId;
//     const formInput = form.querySelector('.input');
//     arr[id - 1][formInput.name] = formInput.value;
//     arr[id - 1]['Статус'] = message;
//     console.log(arr);
//   })
// }

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
    const form = taskElementCopy.querySelector('.form');

    taskElementCopy.dataset.taskItemId = item['idServiceWork'];
    heading.textContent = item['Задача'];
    taskName.textContent = item['Задача'];
    dateStart.textContent = item['Дата начала работы'];
    dateEnd.textContent = item['Дата конца работы'];
    executor.textContent = item['Исполнитель'];
    component.textContent = item['Деталь/Агрегат'];
    quantity.textContent = item['Количество'];

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
