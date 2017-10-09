import { ADD_USER } from "../constants";
import { bake_cookie, read_cookie } from 'sfcookies';

const user = (action) => {
    let { firstName, secondName, email, admin, active } = action;
    return {
        id: Math.random(),
        firstName,
        secondName,
        email,
        admin,
        active
    }
};

const users = (state = [], action) => {
    let users = null;
    state = read_cookie('users');
    switch(action.type) {
        case ADD_USER:
            users = [...state, user(action)];
            bake_cookie('users', users);
            return users;
        default:
            return state;
    }
};

export default users;