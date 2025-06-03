import { getSelectList } from "./util.js";
import { EMPLOYEES, ATA, AIRCRAFT_TYPES } from "./data.js";
import { createId, onButtonFormHidden, onButtonFormRemove } from "./util.js";

const formElement = document.querySelector('.form');
const formLastElement = formElement.querySelector('.form__buttons');
const insertButton = formLastElement.querySelector('.main-form__button--insert');
const fieldsetTemplate = document.querySelector('#fieldset-insert').content.querySelector('.field-group');

const selectExecutorClass = '.field-group--executor';
const selectComponentClass = '.field-group--component';
const selectAircraftClass = '.field-group--title';

const selectExecutorParam = ['lastName', 'firstName'];
const selectComponentParam = ['componentCode'];
const selectAircraftTypeParam = ['aircraftType'];

const onSelectChange = (evt) => {
  const fieldsetTitle = evt.target.closest('.field-group').querySelector('.field-group__title');
  const fieldsetName = fieldsetTitle.querySelector('.field-group__name');
  const fieldsetAircraft = fieldsetTitle.querySelector('.field-group__aircraft');

  if (evt.target.closest('.field-group--executor')) {
    fieldsetName.textContent = `${evt.target.value}`;
  }
  if (fieldsetName.textContent !== 'Название' && evt.target.closest('.field-group--title')) {
    fieldsetAircraft.textContent = ` - ${evt.target.value}`;
  }
}

const getSelectsInsertForm = () => {
  getSelectList(selectExecutorClass, EMPLOYEES, selectExecutorParam);
  getSelectList(selectComponentClass, ATA, selectComponentParam);
  getSelectList(selectAircraftClass, AIRCRAFT_TYPES, selectAircraftTypeParam);
}

getSelectsInsertForm();

const getId = createId();

const onButtonInsertFieldset = () => {
  const newFieldset = fieldsetTemplate.cloneNode(true);
  newFieldset.dataset.fieldsetId = getId();
  formLastElement.insertAdjacentElement('beforebegin', newFieldset);
  getSelectsInsertForm();
};

formElement.addEventListener('click', onButtonFormRemove);
formElement.addEventListener('click', onButtonFormHidden);
formElement.addEventListener('change', onSelectChange);

insertButton.addEventListener('click', onButtonInsertFieldset);

