import React, { Component } from 'react';
import styled from 'styled-components';
import Messages from './Messages';

class MessageList extends Component {
  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messageEnd.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    const { messages } = this.props;

    return (
      <Container>
        <ul>
          {messages.map(message =>
            <Messages
              key={message.id}
              {...message}
            />
          )}
        </ul>
        <div ref={el => this.messageEnd = el} />
      </Container>
    )
  }
}

export default MessageList;

const Container = styled.section`
  background: #fff;
  border-bottom: 3px solid #f4f4f4;
  border-right: 3px solid #f4f4f4;
  border-left: 3px solid #848484;
  border-top: 3px solid #848484;
  min-height: 500px;
  max-height: 500px;
  overflow-y: scroll;
`;
