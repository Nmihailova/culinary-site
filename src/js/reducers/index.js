import { combineReducers } from 'redux';
import deleteReducer from './delete';
import addReducer from './add';
import chooseReducer from './choose';
import editReducer from './edit';
import getReducer from './get';

export default combineReducers({
    deleteReducer,
    addReducer,
    chooseReducer,
    editReducer,
    getReducer
});