import { ADD_JOB } from "../constants";
import { bake_cookie, read_cookie } from 'sfcookies';

const job = (action) => {
    let { title, jobType, assigned, role, sprint, stat, description, linked } = action;
    return {
        id: Math.random(),
        title,
        jobType,
        assigned,
        role,
        sprint,
        stat,
        description,
        linked
    }
};

const jobs = (state = [], action) => {
    let jobs = null;
    state = read_cookie('jobs');
    switch(action.type) {
        case ADD_JOB:
            jobs = [...state, job(action)];
            bake_cookie('jobs', jobs);
            console.log('reducers jobs ', jobs);
            return jobs;
        default:
            return state;
    }
};

export default jobs;