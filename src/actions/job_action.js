import { ADD_JOB, VIEW_JOB} from '../constants';

export const addJob = (title, jobType, assigned, role, sprint, stat, description, linked) => {
    const action = {
        type: ADD_JOB,
        title,
        jobType,
        assigned,
        role,
        sprint,
        stat,
        description,
        linked
    };
    console.log('action in addJob', action);
    return action;
};

export const viewJob = (id) => {
    console.log(id);
    const action = {
        type: VIEW_JOB,
        id
    };
    return action;
};
