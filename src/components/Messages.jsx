import React from 'react';
import styled from 'styled-components';

const Message = ({ message, author }) => (
  <Text>
    <i>{author}</i>: {message}
  </Text>
);

export default Message;

const Text = styled.p`
  padding: 5px;
`;
