import React from 'react';

import { Container, Title, Text } from './styles';

function ModelSection({ modelName, overlayNode, children, ...props }) {
  return (
    <Container {...props}>
      <img src="/images/AI.svg"/>
      <Text>
        <Title>First Page</Title>
        <p>
          This specification shares some 
          commonality with the -webkit-scrollbar 
          specification for controlling the color 
          of the scrollbar. However, there is presently
          no support for modifying the padding and roundness
          for the “track thumb”.
        </p>
      </Text>
    </Container>
  );
}

export default ModelSection;