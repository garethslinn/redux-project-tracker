import { ADD_SPRINT, REMOVE_SPRINT } from "../constants";
import { bake_cookie, read_cookie } from 'sfcookies';

const sprint = (action) => {
    let { sprint, startDate, endDate } = action;
    return {
        id: Math.random(),
        sprint,
        startDate,
        endDate
    }
};

const remove = (state = [], id) => {
    const sprints = state.filter(sprint => sprint.id !== id);
    return sprints;
};

const sprints = (state = [], action) => {
    let sprints = null;
    state = read_cookie('sprints');
    switch(action.type) {
        case ADD_SPRINT:
            sprints = [...state, sprint(action)];
            bake_cookie('sprints', sprints);
            console.log('returning sprints ', sprints);
            return sprints;
        case REMOVE_SPRINT:
            sprints = remove(state, action.id);
            bake_cookie('sprints', sprints);
            return sprints;
        default:
            return state;
    }
};

export default sprints;