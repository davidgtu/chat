import React from 'react';
import Messages from './Messages';

const MessageList = ({ messages }) => (
  <section id="messages-list">
    <ul>
      {messages.map(message =>
        <Messages
          key={message.id}
          {...message}
        />
      )}
    </ul>
  </section>
);

export default MessageList;
