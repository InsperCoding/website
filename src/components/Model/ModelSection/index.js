import React from 'react';

import { Container, Title } from './styles';

function ModelSection({ modelName, overlayNode, children, ...props }) {
  return (
    <Container {...props}>
      <Title>Second Page</Title>
      <img src="/images/AI.svg"/>
    </Container>
  );
}

export default ModelSection;