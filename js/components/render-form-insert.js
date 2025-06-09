import { onButtonFormHidden, onButtonFormRemove, getSelectList } from "./util.js";
import { selectParametrs } from './constants.js';
import { AIRCRAFTS } from "./data.js";

const formElement = document.querySelector('.form');
const formLastElement = formElement.querySelector('.form__buttons');
const insertButton = formLastElement.querySelector('.main-form__button--insert');
const fieldsetTemplate = document.querySelector('#fieldset-insert').content.querySelector('.field-group');

const selectExecutorClass = '.field-group__select--technician';
const selectComponentClass = '.field-group__select--component';
const selectAircraftClass = '.field-group__select--aircraft-type';
const selectBoardClass = '.field-group__select--board';

const selectAircraftTypeElement = formElement.querySelector('.field-group__select--aircraft-type');


const onUploadButton = (evt) => {
  if (evt.target.closest('.input-file__container')) {
    const field = evt.target.closest('.input-file__container').querySelector('.input');
    const label = field.nextElementSibling;
    const labelValue = label.querySelector('.label__text').innerText;

    field.addEventListener('change', () => {
      let countFiles = '';
      if (field.files && field.files.length >= 1) countFiles = field.files.length;

      if (countFiles) {
        label.querySelector('.label__text').textContent = `Выбрано: ${countFiles}`;
      } else {
        label.querySelector('.label__text').textContent = labelValue
      }
    })
  }
}

const onSelectChangeTitle = (evt) => {
  const fieldsetTitle = evt.target.closest('.field-group').querySelector('.field-group__title');
  const fieldsetTechnicial = fieldsetTitle.querySelector('.field-group__technician');
  const fieldsetBoard = fieldsetTitle.querySelector('.field-group__board');
  const selectBoardElement = evt.target.closest('.field-group').querySelector('.field-group__select--board');

  if (evt.target.closest('.field-group__select--technician')) {
    fieldsetTechnicial.textContent = `${evt.target.value}`;
  }
  if (fieldsetTechnicial.textContent !== 'Название' && (evt.target.closest('.field-group__select--board') || evt.target.closest('.field-group__select--aircraft-type'))) {
    fieldsetBoard.textContent = ` - ${selectBoardElement.value}`;
  }
}

const renderBoardList = (param) => {
  let currentListFilter = [];
  AIRCRAFTS.forEach((item) => {
    if (item.aircraftType === param) {
      currentListFilter.push(item);
    }
  })
  return currentListFilter;
}

const getFilterBoardParam = (param) => {
  return {
    array: renderBoardList(param),
    words: ['registrationNumber'],
    separator: '',
  }
}

const onSelectChangeTypeAircraft = (evt) => {
  evt.target.closest('.field-group__list').querySelector('.field-group__select--board').innerHTML = '';
  const value = evt.target.value;

  getSelectList(selectBoardClass, getFilterBoardParam(value));
  onSelectChangeTitle(evt);
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
formElement.addEventListener('click', onUploadButton);
formElement.addEventListener('change', onSelectChangeTitle);

formElement.addEventListener('change', onSelectChangeTypeAircraft);

insertButton.addEventListener('click', onButtonInsertFieldset);

