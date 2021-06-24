import React, { useState } from 'react';
import { BurguerMenu } from '../BurguerMenu';

import Link from 'next/link';
import { Container, Logo, Break, MiddleContent } from './styles';
import { Flex, Box, Button, Image } from '@chakra-ui/react';

function Header() {
  const [activeMenu, setActiveMenu] = useState(false);

  function handleActiveMenu(){
    setActiveMenu(!activeMenu);
  }

  return (
    <Flex class="navbar mr-3" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          <Image src="/images/logo.GIF" boxSize="100px" objectFit="cover"/>
        </a>

        <a role="button" class={`navbar-burger ${activeMenu ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" onClick={handleActiveMenu}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class={`navbar-menu ${activeMenu ? 'is-active' : ''}`}>
        <div class="navbar-start">
          <a class="navbar-item">
            Home
          </a>

          <a class="navbar-item">
            Documentation
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Sobre
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item">
                Quem somos
              </a>
              <a class="navbar-item">
                Nossa equipe
              </a>
              
            </div>
          </div>
        </div>

        {/* <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </Flex>
  );
}

export default Header;