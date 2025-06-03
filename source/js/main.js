import './components/render-form.js';
import { MAINTENANCE } from "./components/data.js";
import { onFormSubmit } from "./components/util.js";

const formElement = document.querySelector('.main-form__form');

onFormSubmit(formElement, MAINTENANCE);
