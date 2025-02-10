'use client';

import Link from 'next/link';
import React from 'react';
import { HeaderWrapper, HeaderTitle, Nav } from './Header.style';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Weather App</HeaderTitle>
      <Nav>
        <Link href='/'>Home</Link>
        <Link href='/favorite'>Favorite</Link>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
