import React from 'react';
import styled from 'styled-components';

const Sidebar = ({ users, username }) => (
  <Container>
    <ul>
      {users.map(user =>
        <User
          key={user.id}
          isUser={username === user.name}
        >
          {user.name}
        </User>
      )}
    </ul>
  </Container>
);

export default Sidebar;

const Container = styled.aside`
  height: 100%;
  flex-basis: 30%;
  background: #fff;
  border-bottom: 3px solid #f4f4f4;
  border-right: 3px solid #f4f4f4;
  border-left: 3px solid #848484;
  border-top: 3px solid #848484;
  min-height: 500px;
  max-height: 500px;
  min-width: 250px;
  max-width: 250px;
  overflow-y: scroll;
`;

const User = styled.li`
  color: ${({ isUser }) => isUser && 'red'};
  font-weight: ${({ isUser }) => isUser && 600};
  padding: 5px;
`;
