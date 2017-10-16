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
    return action;
};

export const removeUser = (id) => {
    const action = {
        type: REMOVE_USER,
        id
    };
    return action;
};