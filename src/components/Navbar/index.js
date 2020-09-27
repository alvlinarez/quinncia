import React from 'react';
import { Li, Nav, Ul } from './styles';
import logo from '../../assets/static/logo.svg';

const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <a>
            <img src={logo} alt="Logo" />
          </a>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navbar;
