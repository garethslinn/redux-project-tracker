import { ADD_JOB, VIEW_JOB, EDIT_JOB} from '../constants';

export const addJob = (jobNo, title, jobType, assigned, role, sprint, stat, description, linked) => {
    const action = {
        type: ADD_JOB,
        jobNo,
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

export const editJob = (title, jobType, assigned, role, sprint, stat, description, linked) => {
    const action = {
        type: EDIT_JOB,
        title,
        jobType,
        assigned,
        role,
        sprint,
        stat,
        description,
        linked
    };
    console.log('action in editJob', action);
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
