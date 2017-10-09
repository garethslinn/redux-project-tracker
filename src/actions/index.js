import { ADD_USER} from '../constants';

export const addUser = (text) => {
    const action = {
        type: ADD_USER,
        text
    };
    console.log('action in addUser', action);
    return action;
};
