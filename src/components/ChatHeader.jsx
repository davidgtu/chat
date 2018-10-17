import React from 'react';
import styled from 'styled-components';

const ChatHeader = () => (
  <Container>
    <p>Fuzz - Instant Message Chatroom</p>
    <HeaderButtons>
      <Button>_</Button>
      <Button>[  ]</Button>
      <Button>×</Button>
    </HeaderButtons>
  </Container>
);

export default ChatHeader;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #08216b, #a5c6ef);
  height: 35px;
  color: #fff;
  padding: 0 10px;
`;

const HeaderButtons = styled.ul`
  display: flex;
  list-style: none;
`;

const Button = styled.li`
  margin: 0 2px;
  width: 25px;
  height: 25px;
  color: black;
  font-weight: 700;
  background: #d6d6ce;
  font-size: 20px;
  border-top: 1px solid white;
  border-left: 1px solid white;
  border-right: 1px solid #848484;
  border-bottom: 1px solid #848484;
  box-shadow: 1px 1px 1px #424242;
  text-align: center;
  line-height: 25px;
`;
