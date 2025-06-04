import './components/render-form-task.js';
import { SERVICE_WORKS } from './components/data.js';
import { onFormSubmit } from './components/util.js';
import { serviceWork } from './components/objects.js';

const formElement = document.querySelector('.main-form__form');

onFormSubmit(formElement, SERVICE_WORKS, serviceWork);
