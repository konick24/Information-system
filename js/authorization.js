import './components/validate-auth.js';
import { getSelectList } from './components/util.js';
import { selectParametrs } from './components/constants.js';

const selectPostClass = '.auth-form__input--post';

getSelectList(selectPostClass, selectParametrs.post);
