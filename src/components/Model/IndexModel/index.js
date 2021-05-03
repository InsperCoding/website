import React from 'react';

import { Container, Title } from './styles';

function ModelSection({ modelName, overlayNode, children, ...props }) {
  return (
    <Container {...props}>
      <Title>First Page</Title>
      <img src="/images/headphone.svg"/>
    </Container>
  );
}

export default ModelSection;