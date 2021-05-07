import React from 'react';
import { BurguerMenu } from '../BurguerMenu';

import Link from 'next/link';
import { Container, Logo, Break, MiddleContent } from './styles';

function Header() {
  return (
    <>
      <Container>
        <Link href="/">
          <Logo>
            InsperCoding
            <span>.</span>
          </Logo>
        </Link>
        <MiddleContent>
          <Link href="/users">
            <a>AI</a>
          </Link>
        </MiddleContent>

        <BurguerMenu/>
      </Container>
      <Break/>
    </>
  );
}

export default Header;