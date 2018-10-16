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
`;
