import { combineReducers } from 'redux';
import addUser from './user_reducer';
import addSprint from './addSprint_reducer';

export default combineReducers({
    addUser,
    addSprint
})
