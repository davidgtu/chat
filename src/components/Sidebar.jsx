import React from 'react';
import styled from 'styled-components';

const Sidebar = ({ users }) => (
  <Container>
    <ul>
      {users.map(user =>
        <li key={user.id}>{user.name}</li>
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
  
  ul {
    li {
      padding: 5px;
    }
  }
`;
