import React from 'react';
import { LayoutContainer } from './styles';
import Navbar from '../Navbar';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Navbar />
      {children}
    </LayoutContainer>
  );
};

export default Layout;
