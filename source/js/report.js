import { getReportList } from './components/render-list-report.js';
import { createReportFilter, createReportFilterDate } from './components/filter-report.js';

const selectMain = document.querySelector('.report__select--main');
const selectSecondary = document.querySelector('.report__select--secondary');

createReportFilter(selectMain.value);

selectMain.addEventListener('input', (evt) => {
  if (evt.target.value === 'date') {
    createReportFilterDate(selectMain);
  } else {
    createReportFilter(evt.target.value);
    getReportList(evt.target.value.trim(), selectSecondary.value.trim());
  }
});

selectSecondary.addEventListener('input', (evt) => getReportList(selectMain.value.trim(), evt.target.value.trim()));

getReportList();
