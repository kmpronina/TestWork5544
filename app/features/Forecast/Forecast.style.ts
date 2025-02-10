import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1rem;
  background-color: var(--blue-2);
  border-radius: 1rem;
  border: 1px solid var(--mauve-6);
`;

export const ForecastSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 0.5rem;
`;

export const ForecastSectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--mauve-11);
`;
