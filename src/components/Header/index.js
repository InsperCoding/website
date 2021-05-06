import React from 'react';
import { BurguerMenu } from '../BurguerMenu';

import { Container, Logo, Break, MiddleContent, Burguer } from './styles';

function Header() {
  return (
    <>
      <Container>
        <Logo>
          InsperCoding
          <span>.</span>
        </Logo>
        <MiddleContent>
          <h1>Middle</h1>
        </MiddleContent>

        <BurguerMenu/>
        {/* <Burguer>
          Burguer
        </Burguer> */}
      </Container>
      <Break/>
    </>
  );
}

export default Header;