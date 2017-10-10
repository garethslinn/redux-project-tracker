import { ADD_SPRINT } from '../constants';

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
