import { ADD_SPRINT, REMOVE_SPRINT } from '../constants';

export const addSprint = (sprint, startDate, endDate) => {
    const action = {
        type: ADD_SPRINT,
        sprint,
        startDate,
        endDate
    };
    console.log('action in addSprint', action);
    return action;
};

export const removeSprint = (id) => {
    const action = {
        type: REMOVE_SPRINT,
        id
    };
    return action;
};
