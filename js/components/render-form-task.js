import { onButtonFormHidden, onButtonFormRemove, getSelectList } from "./util.js";
import { selectParametrs } from "./constants.js";

const formElement = document.querySelector('.form');
const formLastElement = formElement.querySelector('.form__buttons');
const insertButton = formLastElement.querySelector('.main-form__button--insert');
const fieldsetTemplate = document.querySelector('#planning-form').content.querySelector('.field-group');

const selectTaskClass = '.field-group__select--task';
const selectSpecializationClass = '.field-group__select--category';
const selectExecutorClass = '.field-group__select--technician';
const selectComponentClass = '.field-group__select--component';

const selectTaskElement = document.querySelector('.field-group__select--task');

const getSelectsPlanningForm = () => {
  getSelectList(selectTaskClass, selectParametrs.task);
  getSelectList(selectSpecializationClass, selectParametrs.category);
  getSelectList(selectExecutorClass, selectParametrs.executor);
  getSelectList(selectComponentClass, selectParametrs.component);
}

getSelectsPlanningForm();

const onSelectTaskChange = (evt) => {
  const fieldsetTitle = evt.target.closest('.field-group').querySelector('.field-group__title');
  fieldsetTitle.textContent = evt.target.value;
}

const onButtonInsertFieldset = () => {
  const newFieldset = fieldsetTemplate.cloneNode(true);
  formLastElement.insertAdjacentElement('beforebegin', newFieldset);
  getSelectsPlanningForm();
};

formElement.addEventListener('click', onButtonFormRemove);
formElement.addEventListener('click', onButtonFormHidden);

selectTaskElement.addEventListener('change', onSelectTaskChange)

insertButton.addEventListener('click', onButtonInsertFieldset);
