import React from 'react';
import styled from 'styled-components';

const options = ['File', 'Edit', 'People', 'View', 'Help', 'Mate'];

const Options = () => (
  <Container>
    {options.map((option, index) =>
      <Text
        key={index}
      >
        {option}
      </Text>
    )}
  </Container>
);

export default Options;

const Container = styled.div`
  padding: 5px 5px 1px;
`;

const Text = styled.span`
  color: #000;
  cursor: pointer;
  padding: 0 5px;
`;
