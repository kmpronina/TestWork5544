import { styled } from 'styled-components';
import { Card } from '@radix-ui/themes';

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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
  }
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
