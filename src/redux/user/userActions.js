import { userActionTypes } from './userActionTypes';

export const setCurrentUser = (user) => ({
    type: userActionTypes.CURRENT_USER,
    payload: user
});