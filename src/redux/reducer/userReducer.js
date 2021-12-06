import { actionTypes } from "../actionTypeConstants/actionTypes";

const initialState = {
  userList: [],
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_USER_LIST:
      return { ...state, userList: payload };
    case actionTypes.ADD_USER: {
      const newUserList = [...state.userList, {user: payload} ];
      return { ...state, userList: newUserList};
    }
    default:
      return state;
  }
};
