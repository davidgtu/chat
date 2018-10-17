import React from 'react';
import styled from 'styled-components';

const MessageInput = ({ addMessage }) => {
  let input;

  return (
    <Container>
      <Input
        autoFocus
        onKeyPress={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();

            input.value.length !== 0 && addMessage(input.value, 'Me');
            input.value = '';
          }
        }}
        type="text"
        ref={(node) => input = node}
      />
    </Container>
  )
};

export default MessageInput;

const Container = styled.div`
  /* margin: 10px; */
`;

const Input = styled.textarea`
  background: #fff;
  border-bottom: 3px solid #f4f4f4;
  border-right: 3px solid #f4f4f4;
  border-left: 3px solid #848484;
  border-top: 3px solid #848484;
  width: 98%;
  height: 80px;
  resize: none;
  padding: 5px;
`;