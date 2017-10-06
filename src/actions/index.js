import { ADD_REMINDER, CLEAR_REMINDERS, DELETE_REMINDER } from '../constants';


export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate
    };
    console.log('action in addReminder', action);
    return action;
};

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    };
    console.log('deleting in actions', action);
    return action;
};

export const clearReminders = () => {
    const action = {
        type: CLEAR_REMINDERS,
    };
    console.log('clear reminders actions', action);
    return action;
};