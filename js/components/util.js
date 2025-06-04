const createId = () => {
  let currentId = 1;
  return () => currentId++;
}

const createSelectList = (selectElement, arr, words, separator) => {
  console.log(typeof(words.length));
  arr.forEach((item) => {
    const newOption = document.createElement('option');
    let text = '';
    words.forEach((word, index) => {
      text += `${item[word]} `;
      if (separator && index !== words.length - 1) {
         text += `${separator} `;
      }
    })
    newOption.value = text;
    newOption.textContent = text;
    selectElement.insertAdjacentElement('beforeend', newOption);
  })
}

const getSelectList = (selectClass, { array, words, separator }) => {
  const selectsElement = document.querySelectorAll(selectClass);
  const lastSelectElement = selectsElement[selectsElement.length - 1];
  createSelectList(lastSelectElement, array, words, separator);
}

const getObjectLength = (obj) => {
  let counter = 0;
  for (let key in obj) {
    counter++;
  }
  return counter;
}

const onFormSubmit = (form, arr, pattern) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formInputs = form.querySelectorAll('.input'); // все поля из формы
    const objLength = getObjectLength(pattern); // длина объекта
    const objCount = formInputs.length / objLength; // итоговое количество объектов

    for (let i = 0; i < objCount; i++) {
      let formObjectCopy = {...pattern};
      for (let j = i * objLength; j < objLength * (i + 1); j++) {
        const key = formInputs[j].name;
        const value = formInputs[j].value;
        formObjectCopy[key] = value;
      }
      arr.push(formObjectCopy);
      console.log(arr);
    }
  })
}

const onButtonFormRemove = (evt) => {
  if (evt.target.closest('.button-remove')) {
    evt.target.closest('.item').classList.add('remove');
    setTimeout(() => evt.target.closest('.item').remove(), 500);
  }
};

const onButtonFormHidden = (evt) => {
  if (evt.target.closest('.field-group__button--hidden')) {
    evt.target.closest('.field-group__bar').classList.toggle('field-group__bar--close')
  }
};

export {
  createId,
  getSelectList,
  onFormSubmit,
  onButtonFormRemove,
  onButtonFormHidden
}
