import React, { useEffect, useState } from 'react';
import ProgressBar from '../ProgressBar';
import { LayoutContainer } from './styles';

const Layout = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
