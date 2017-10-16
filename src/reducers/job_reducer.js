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

            //let existing = jobs.find(job => job.jobNo === action.jobNo);
/*
            for (let job of jobs) {
                if(job.jobNo === action.jobNo) {
                    job === action
                }
            }
            */
            let i=0;

            for (i; i <= jobs.length; i++ ) {
                console.log('0. JOBI',jobs[i]);
                console.log(jobs[i].title);
                if(job.jobNo === action.jobNo) {

                    jobs[i].title === action.title
                    console.log('UPDATED')
                } else {
                    console.log('No MATCH')
                }
            }


                console.log('1. action', action.title);

                console.log('2. JOBS ',jobs);


            bake_cookie('jobs', jobs);
            console.log('3. reducers EDIT jobs ', jobs);
            return jobs;
        default:
            return state;
    }
};

export default jobs;