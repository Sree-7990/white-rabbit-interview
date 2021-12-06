import {actionTypes} from '../actionTypeConstants/actionTypes';

export const addUserList = (userList) => {
    return {
        type: actionTypes.ADD_USER_LIST,
        payload: userList
    }
}

export const addUser = (data) => {
    return {
        type: actionTypes.ADD_USER,
        payload: data
    }
}
