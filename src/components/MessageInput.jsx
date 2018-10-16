import React from 'react';
import styled from 'styled-components';

const MessageInput = (props) => {
  let input;

  return (
    <Container>
      <Input
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            props.addMessage(input.value, 'Me');
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
  position: fixed;
  border: red 1px solid;
  bottom: 0;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
`;