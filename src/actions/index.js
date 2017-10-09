import { ADD_USER} from '../constants';

export const addUser = (firstName, secondName) => {
    const action = {
        type: ADD_USER,
        firstName,
        secondName
    };
    console.log('action in addUser', action);
    return action;
};
