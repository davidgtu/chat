import * as Types from '../constants/ActionTypes';
import { addUser, messageReceived, populateUsersList } from '../actions';

const setupSocket = (dispatch, username, color) => {
  // const socket = new WebSocket(`ws://$192.168.28.154:8989`)
  const socket = new WebSocket('ws://192.168.86.157:8989')

  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: Types.ADD_USER,
      name: username,
    }))
  };
  
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data)
    switch (data.type) {
      case Types.ADD_MESSAGE:
        dispatch(messageReceived(data.message, data.author, color))
        break
      case Types.ADD_USER:
        dispatch(addUser(data.name))
        break
      case Types.USER_LIST:
        dispatch(populateUsersList(data.users))
        break
      default:
        break
    }
  }

  return socket
}

export default setupSocket