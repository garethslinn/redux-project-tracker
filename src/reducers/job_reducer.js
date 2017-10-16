import { ADD_JOB, EDIT_JOB } from "../constants";
import { bake_cookie, read_cookie } from 'sfcookies';

const job = (action) => {
    let { jobNo, title, jobType, assigned, role, sprint, stat, description, linked } = action;
    return {
        id: Math.random(),
        jobNo,
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
            return jobs;
        case EDIT_JOB:
            jobs = [...state];
            let i=0;
            for( i in jobs) {
                if(jobs[i].jobNo === action.jobNo) {
                    action.id = jobs[i].id;
                    jobs[i] = action;
                }
            }
            bake_cookie('jobs', jobs);
            return jobs;
        default:
            return state;
    }
};

export default jobs;