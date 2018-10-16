import React, { Component } from 'react';
import styled from 'styled-components';
import 'normalize.css';
import './index.css';
import { Sidebar, MessageInput, MessageList } from './containers';

class App extends Component {
  render() {
    return (
      <Container>
        <Sidebar />
        <MessageContainer>
          <MessageList />
          <MessageInput />
        </MessageContainer>
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  height: 100%;
  display: flex;
`;

const MessageContainer = styled.section`
  flex-basis: 70%;
`;
