import React from 'react';

import { Container, Heading } from './styles';

function DefaultOverlayContent({ label, description }) {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h1>{description}</h1>
      </Heading>
    </Container>
  );
}

export default DefaultOverlayContent;