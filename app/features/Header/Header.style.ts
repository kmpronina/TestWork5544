import { styled } from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
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
