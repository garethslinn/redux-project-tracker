import { VIEW_JOB } from "../constants";
import { bake_cookie, read_cookie } from 'sfcookies';

const view = (action) => {
    let { id } = action;
    return {
        id
    }
};

const views = (state = [], action) => {
    let views = null;
    state = read_cookie('views');
    switch(action.type) {
        case VIEW_JOB:
            bake_cookie('views', {id: action.id});
            return views;
        default:
            return state;
    }
};

export default views;