import styled from "styled-components";

export const CardHeaderStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const CardHeaderTitle = styled.h2`
  max-width: 24rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--blue-11);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
