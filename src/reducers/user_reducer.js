import { ADD_USER, REMOVE_USER } from "../constants";
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

const remove = (state = [], id) => {
    const users = state.filter(user => user.id !== id);
    console.log('new reduced users ' , users );
    return users;
};

const users = (state = [], action) => {
    let users = null;
    state = read_cookie('users');
    switch(action.type) {
        case ADD_USER:
            users = [...state, user(action)];
            bake_cookie('users', users);
            console.log('reducers users ', users);
            return users;
        case REMOVE_USER:
            users = remove(state, action.id);
            bake_cookie('users', users);
            return users;
        default:
            return state;
    }
};

export default users;