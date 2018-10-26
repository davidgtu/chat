import React from 'react';
import styled from 'styled-components';

const Message = ({ message, author, color }) => (
  <Text>
    <Author color={color}>{author}</Author>: {message}
  </Text>
);

export default Message;

const Text = styled.p`
  padding: 5px;
`;

const Author = styled.i`
  color: ${({ color }) => color ? color : 'red'};
  font-weight: 600;
`;
