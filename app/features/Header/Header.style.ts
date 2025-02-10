'use client';

import { styled } from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1rem;
  gap: 1rem;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 1rem;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;
