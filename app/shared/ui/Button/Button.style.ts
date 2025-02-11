import { styled } from 'styled-components';
import { Button as RadixButton } from '@radix-ui/themes';

export const StyledButton = styled(RadixButton)`
  width: fit-content;
  color: var(--mauve-12);
  background-color: var(--blue-3);
  border-radius: 0.25rem;
  border: 1px solid var(--blue-6);
  padding: 1rem;
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-2);
`;
