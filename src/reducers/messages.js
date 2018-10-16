import * as Types from '../constants/ActionTypes';

const messages = (state = [], action) => {
  switch (action.type) {
    case Types.ADD_MESSAGE:
    case Types.MESSAGE_RECEIVED:
      return [...state, {
        message: action.message,
        author: action.author,
        id: action.id,
      }]
    
    default:
      return state;
  }
};

export default messages;
