import { ADD_USER, REMOVE_USER} from '../constants';

export const addUser = (firstName, secondName, email, admin, active) => {
    const action = {
        type: ADD_USER,
        firstName,
        secondName,
        email,
        admin,
        active
    };
    console.log('action in addUser', action);
    return action;
};

export const removeUser = (id) => {
    const action = {
        type: REMOVE_USER,
        id
    };
    console.log('deleting in actions', action);
    return action;
};