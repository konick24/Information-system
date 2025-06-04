import './components/render-form-insert.js';
import { MAINTENANCE } from "./components/data.js";
import { onFormSubmit } from "./components/util.js";
import { maintenance } from './components/objects.js';

const formElement = document.querySelector('.main-form__form');

onFormSubmit(formElement, MAINTENANCE, maintenance);
