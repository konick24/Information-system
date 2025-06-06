import { getEntryList } from "./components/render-list-entry.js";
import { createEntryFilter } from "./components/filter-entry.js";

const selectMain = document.querySelector('.entry__select--main');
const selectSecondary = document.querySelector('.entry__select--secondary');

createEntryFilter(selectMain.value);

selectMain.addEventListener('input', (evt) => {
  createEntryFilter(evt.target.value);
  getEntryList(evt.target.value.trim(), selectSecondary.value.trim());
});

selectSecondary.addEventListener('input', (evt) => getEntryList(selectMain.value.trim(), evt.target.value.trim()));
