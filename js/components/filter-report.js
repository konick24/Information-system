import { getSelectList } from "./util.js";
import { selectParametrs } from "./constants.js";
import { getReportListByDate } from "./render-list-report.js";

const selectSecondary = document.querySelector('.report__select--secondary');
const selectSecondaryClass = '.report__select--secondary'
const formDate = document.querySelector('.report__form-date');
const formDateButton = formDate.querySelector('.report__button');

const selectParam = {
  'status': selectParametrs.status,
  'aircraft_type': selectParametrs.aircraftType,
  'technician': selectParametrs.executor,
  'Все': selectParametrs.default,
}

const createReportFilter = (mainParam) => {
  selectSecondary.disabled = false;
  selectSecondary.innerHTML = '';

  if (!formDate.classList.contains('hidden')) {
    formDate.classList.add('hidden');
  }

  selectSecondary.classList.remove('hidden');

  switch(mainParam) {
    case 'status':
      getSelectList(selectSecondaryClass, selectParam[mainParam]);
      break;
    case 'aircraft_type':
      getSelectList(selectSecondaryClass, selectParam[mainParam]);
      break;
    case 'technician':
      getSelectList(selectSecondaryClass, selectParam[mainParam]);
      break;
    case 'Все':
      selectSecondary.disabled = true;
      break;
    }
}

const onFormDateButton = (form) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const dateStart = form.querySelector('.report__date--start').value;
    const dateEnd = form.querySelector('.report__date--end').value;
    getReportListByDate(dateStart, dateEnd);
  })
}

const createReportFilterDate = (element) => {
  formDate.classList.remove('hidden');
  selectSecondary.classList.add('hidden');
  onFormDateButton(formDate);
}



export { createReportFilter, createReportFilterDate };
