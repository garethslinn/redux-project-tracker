import { combineReducers } from 'redux';
import addUser from './user_reducer';
import addSprint from './sprint_reducer';
import addJob from './job_reducer';
import viewJob from './view_reducer';

export default combineReducers({
    addUser,
    addSprint,
    addJob,
    viewJob
})
