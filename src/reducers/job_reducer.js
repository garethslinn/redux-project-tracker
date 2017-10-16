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
            console.log('reducers jobs ', jobs);
            return jobs;
        case EDIT_JOB:
            jobs = [...state];

            let index = jobs.find(job => job.title === action.title);

                console.log('job.id', job.id);
                console.log('action', action);
                console.log('jobs', jobs);

                console.log('Action title',action.id);
                console.log('JOBS I',index);

                //jobs[index].title = action.title;

            bake_cookie('jobs', jobs);
            console.log('reducers EDIT jobs ', jobs);
            return jobs;
        default:
            return state;
    }
};

export default jobs;