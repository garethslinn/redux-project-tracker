import { combineReducers } from 'redux';
import addUser from './addUser';
import addSprint from './addSprint';

export default combineReducers({
    addUser,
    addSprint
})
