import * as Types from '../constants/ActionTypes';

const users = (state = [], action) => {
  switch (action.type) {
    case Types.ADD_USER:
      return [...state];

    case Types.USER_LIST:
      return action.users;

    default:
      return state;
  }
};

export default users;
