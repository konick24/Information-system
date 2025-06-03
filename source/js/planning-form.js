import { createId, onButtonFormHidden, onButtonFormRemove, getSelectList } from "./components/util.js";
import { MAINTENANCE, SPECIALIZATIONS, EMPLOYEES, ATA } from "./components/data.js";

const formElement = document.querySelector('.form');
const formLastElement = formElement.querySelector('.form__buttons');
const insertButton = formLastElement.querySelector('.main-form__button--insert');
const fieldsetTemplate = document.querySelector('#planning-form').content.querySelector('.field-group');

const selectTaskClass = '.field-group__input--task';
const selectSpecializationClass = '.field-group__input--specialization';
const selectExecutorClass = '.field-group__input--executor';
const selectComponentClass = '.field-group__input--component';

const selectTaskParam = ['Тип ВС', 'Деталь/Агрегат'];
const selectSpecializationParam = ['specializationTitle'];
const selectExecutorParam = ['lastName', 'firstName'];
const selectComponentParam = ['componentCode'];

const getSelectsPlanningForm = () => {
  getSelectList(selectTaskClass, MAINTENANCE, selectTaskParam);
  getSelectList(selectSpecializationClass, SPECIALIZATIONS, selectSpecializationParam);
  getSelectList(selectExecutorClass, EMPLOYEES, selectExecutorParam);
  getSelectList(selectComponentClass, ATA, selectComponentParam);
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
