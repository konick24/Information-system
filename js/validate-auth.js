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
  let status = false;
  console.log(login);
  console.log(EMPLOYEES.find((employee) => employee.auth.login === login));
  if (EMPLOYEES.find((employee) => employee.auth.login === login)) {
    status = true;
    console.log(status);
    return true;
  }
  console.log(status);
  return false;
}

const isValidPassword = (password) => {
  // if (EMPLOYEES.find((employee) => employee.auth.password === password)) {
  //   return true;
  // }
  // return false;
  let status = false;
  if (EMPLOYEES.find((employee) => employee.auth.password === password)) {
    status = true;
    console.log(status);
    return true;
  }
  console.log(status);
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

const isValid = () => {
  // console.log(`валидация ${pristine.validate()}`);
  return pristine.validate()};

const resetPristine = () => pristine.reset();

loginElement.addEventListener('input', () => resetPristine());
passwordElement.addEventListener('input', () => resetPristine());

authFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {
    console.log(`форма валидна`);
    const datas = new FormData(evt.target);
    for (const data of datas.entries()) {
      console.log(data);
    }
  } else {
    console.log(`форма не валидна`);
  }
});

export {isValid};
