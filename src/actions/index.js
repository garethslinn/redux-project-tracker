import { ADD_USER} from '../constants';

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
