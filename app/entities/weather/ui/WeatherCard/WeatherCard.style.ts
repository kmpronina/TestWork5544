import { styled } from "styled-components";
import { Card } from "@radix-ui/themes";

export const CardWrapper = styled(Card)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  padding: 1rem;
  &:hover {
    background-color: var(--blue-3);
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  gap: 1rem;
`;
