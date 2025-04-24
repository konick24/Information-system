import { EMPLOYEES } from "./data.js";

const authFormElement = document.querySelector('.auth-form');
const loginElement = authFormElement.querySelector('.auth-field__input--login');
const passwordElement = authFormElement.querySelector('.auth-field__input--password');

const textError = 'Не верный логин или пароль';

const pristine = new Pristine(authFormElement, {
  classTo: 'auth-form__container',
  errorTextParent: 'auth-form__container',
  errorTextClass: 'auth-form__container--error',
}, false)

const isValidLogin = (login) => {
  if (EMPLOYEES.find((employee) => employee.auth.login === login)) {
    return true;
  }
  return false;
}

const isValidPassword = (password) => {
  if (EMPLOYEES.find((employee) => employee.auth.password === password)) {
    return true;
  }
  return false;
}

pristine.addValidator(
  loginElement,
  isValidLogin,
  textError
)

pristine.addValidator(
  passwordElement,
  isValidPassword,
  textError
)

const isValid = () => pristine.validate();

authFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {
    const datas = new FormData(evt.target);
    console.log(`форма валидна`);

    for (const data of datas.entries()) {
      console.log(data);
    }
  } else {
    console.log(`форма не валидна`);
  }
});

export {isValid};
