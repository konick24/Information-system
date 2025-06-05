import { EMPLOYEES } from "./data.js";

const authFormElement = document.querySelector('.auth-form');
const loginElement = authFormElement.querySelector('.auth-form__input--login');
const passwordElement = authFormElement.querySelector('.auth-form__input--password');
const postElement = authFormElement.querySelector('.auth-form__select--post');
const errorElement = authFormElement.querySelector('.auth-form__container-error');

let currentPost = '';

const isValidLogin = (employee, login) => {
  if (employee.auth.login === login) {
    return true;
  }
  errorElement.textContent = 'Не верный логин или пароль, или должность!';
  return false;
}

const isValidPassword = (employee, password) => {
  if (employee.auth.password === password) {
    return true;
  }
  errorElement.textContent = 'Не верный логин или пароль, или должность!';
  return false;
}

const isValidPost = (employee, post) => {
  if (employee.post == post) {
    currentPost = post;
    return true;
  }
  errorElement.textContent = 'Не верный логин или пароль, или должность!';
  return false;
}

const isValid = () => {
  const result = EMPLOYEES.find((employee) =>
      isValidLogin(employee, loginElement.value.trim()) &&
      isValidPassword(employee, passwordElement.value.trim()) &&
      isValidPost(employee, postElement.value.trim()))

  if (result) {
    return true;
  }
  return false;
};

authFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {
    console.log(`форма валидна`);
    window.location = `./${currentPost}.html`;
  } else {
    console.log(`форма не валидна`);
  }
});

const onInputChange = (evt) => {
  const errorContainer = evt.target.closest('.auth-form').querySelector('.auth-form__container-error');
  errorContainer.textContent = '';
}

loginElement.addEventListener('input', onInputChange);
passwordElement.addEventListener('input', onInputChange);
postElement.addEventListener('input', onInputChange);

export {isValid};
