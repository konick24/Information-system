import { createId, onButtonFormHidden, onButtonFormRemove, getSelectList } from "./components/util.js";
import { selectParametrs } from "./components/constants.js";

const formElement = document.querySelector('.form');
const formLastElement = formElement.querySelector('.form__buttons');
const insertButton = formLastElement.querySelector('.main-form__button--insert');
const fieldsetTemplate = document.querySelector('#planning-form').content.querySelector('.field-group');

const selectTaskClass = '.field-group__input--task';
const selectSpecializationClass = '.field-group__input--specialization';
const selectExecutorClass = '.field-group__input--executor';
const selectComponentClass = '.field-group__input--component';

const getSelectsPlanningForm = () => {
  getSelectList(selectTaskClass, selectParametrs.task);
  getSelectList(selectSpecializationClass, selectParametrs.specialization);
  getSelectList(selectExecutorClass, selectParametrs.executor);
  getSelectList(selectComponentClass, selectParametrs.component);
}

getSelectsPlanningForm();

const getId = createId();

const onButtonInsertFieldset = () => {
  const newFieldset = fieldsetTemplate.cloneNode(true);
  newFieldset.dataset.fieldsetId = getId();
  formLastElement.insertAdjacentElement('beforebegin', newFieldset);
  getSelectsPlanningForm();
};

formElement.addEventListener('click', onButtonFormRemove);
formElement.addEventListener('click', onButtonFormHidden);

insertButton.addEventListener('click', onButtonInsertFieldset);
