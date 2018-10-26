import React, { Component } from 'react';
import styled from 'styled-components';
import 'normalize.css';
import './index.css';
import { Sidebar, MessageInput, MessageList } from './containers';
import { ChatHeader, Options } from './components';

class App extends Component {
  render() {
    const { username } = this.props;
    return (
      <Background>
        <Window>
          <ChatHeader/>
          <Container>
            <Options />
            <ContentContainer>
              <MessageContainer>
                <MessageList />
              </MessageContainer>
              <SidebarContainer>
                <Sidebar />
              </SidebarContainer>
            </ContentContainer>
            <InputContainer>
              <MessageInput username={username}/>
            </InputContainer>
          </Container>
        </Window>
      </Background>
    );
  }
}

export default App;

const InputContainer = styled.div`
  padding: 10px;
`;

const Background = styled.div`
  background-color: rgb(0, 128, 131);
  height: 100%;
`;

const Window = styled.div`
  box-shadow: 2px 2px 2px #424242;
  border-top: 1px solid white;
  border-left: 1px solid white;
  border-right: 1px solid #848484;
  border-bottom: 1px solid #848484;
  max-width: 768px;
  margin: 0 auto;
`;

const Container = styled.div`
  height: 100%;
  background: #d6d6ce;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MessageContainer = styled.section`
  flex-basis: auto;
  width: 100%;
  padding: 10px;
`;

const SidebarContainer = styled.div`
  padding: 10px;
`;
