import * as Types from '../constants/ActionTypes';

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, author) => ({
  type: Types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author,
});

export const addUser = (name) => ({
  type: Types.ADD_USER,
  id: nextUserId++,
  name,
});

export const messageReceived = (message, author) => ({
  type: Types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author,
});

export const populateUsersList = (users) => ({
  type: Types.USER_LIST,
  users,
});