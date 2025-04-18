const formElement = document.querySelector('.form');
const formLastElement = formElement.querySelector('.form__buttons');
const insertButton = formLastElement.querySelector('.main-form__button--insert');
const fieldsetTemplate = document.querySelector('#fieldset-insert').content.querySelector('.field-group');
const fieldsetButtonHidden = fieldsetTemplate.querySelector('.field-group__button--hidden');
const fieldGroupList = fieldsetTemplate.querySelector('.field-group__list')

const onButtonRemove = (evt) => {
  if (evt.target.closest('.field-group__button--remove')) {
    evt.target.closest('.field-group').remove();
  }
};

const onButtonHidden = (evt) => {
  if (evt.target.closest('.field-group__button--hidden')) {
    evt.target.closest('.field-group__bar').classList.toggle('field-group__bar--close')
  }
};

const onButtonInsertFieldset = () => {
  const newFieldset = fieldsetTemplate.cloneNode(true);
  formLastElement.insertAdjacentElement('beforebegin', newFieldset);
};

formElement.addEventListener('click', onButtonRemove);
formElement.addEventListener('click', onButtonHidden);


insertButton.addEventListener('click', onButtonInsertFieldset)

