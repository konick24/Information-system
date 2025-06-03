import './components/validate-auth.js';
import { getSelectList } from './components/util.js';
import { POSTS } from './components/data.js';

const param = ['postName'];
const selectPostClass = '.auth-form__input--post';

getSelectList(selectPostClass, POSTS, param);
