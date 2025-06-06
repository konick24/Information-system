import { getSelectList } from "./util.js";
import { onButtonFormHidden, onButtonFormRemove } from "./util.js";
import { selectParametrs } from './constants.js';

const formElement = document.querySelector('.form');
const formLastElement = formElement.querySelector('.form__buttons');
const insertButton = formLastElement.querySelector('.main-form__button--insert');
const fieldsetTemplate = document.querySelector('#fieldset-insert').content.querySelector('.field-group');

const selectExecutorClass = '.field-group__select--executor';
const selectComponentClass = '.field-group__select--component';
const selectAircraftClass = '.field-group__select--title';

const onSelectChange = (evt) => {
  const fieldsetTitle = evt.target.closest('.field-group').querySelector('.field-group__title');
  const fieldsetName = fieldsetTitle.querySelector('.field-group__name');
  const fieldsetAircraft = fieldsetTitle.querySelector('.field-group__aircraft');

  if (evt.target.closest('.field-group__select--executor')) {
    fieldsetName.textContent = `${evt.target.value}`;
  }
  if (fieldsetName.textContent !== 'Название' && evt.target.closest('.field-group__select--title')) {
    fieldsetAircraft.textContent = ` - ${evt.target.value}`;
  }
}

const getSelectsInsertForm = () => {
  getSelectList(selectExecutorClass, selectParametrs.executor);
  getSelectList(selectComponentClass, selectParametrs.component);
  getSelectList(selectAircraftClass, selectParametrs.aircraftType);
}

getSelectsInsertForm();

const onButtonInsertFieldset = () => {
  const newFieldset = fieldsetTemplate.cloneNode(true);
  formLastElement.insertAdjacentElement('beforebegin', newFieldset);
  getSelectsInsertForm();
};

formElement.addEventListener('click', onButtonFormRemove);
formElement.addEventListener('click', onButtonFormHidden);
formElement.addEventListener('change', onSelectChange);

insertButton.addEventListener('click', onButtonInsertFieldset);

