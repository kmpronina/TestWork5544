import { styled } from "styled-components";
import { Card } from "@radix-ui/themes";

export const ForecastCardWrapper = styled(Card)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ForecastCardHeader = styled.h4`
  width: 12rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--mauve-11);
`;

export const ForecastCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;
