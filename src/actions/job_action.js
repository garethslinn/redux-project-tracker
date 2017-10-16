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
    return action;
};

export const editJob = (jobNo, title, jobType, assigned, role, sprint, stat, description, linked) => {
    const action = {
        type: EDIT_JOB,
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
