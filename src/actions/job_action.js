import { ADD_JOB, REMOVE_JOB} from '../constants';

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

export const removeJob = (id) => {
    const action = {
        type: REMOVE_JOB,
        id
    };
    return action;
};
