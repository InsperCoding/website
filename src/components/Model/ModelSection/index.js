import React from 'react';

import { Container } from './styles';

function ModelSection({ modelName, overlayNode, children, ...props }) {
  return (
    <Container {...props}>
      <h1>ModelSection</h1>
    </Container>
  );
}

export default ModelSection;