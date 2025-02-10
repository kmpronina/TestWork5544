'use client';

import { Responsive } from '@radix-ui/themes/dist/cjs/props/prop-def.js';
import { StyledButton } from './Button.style';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  label: string;
  onClick?: () => void;
  size?: Responsive<'1' | '2' | '3' | '4'>;
  variant?: 'outline' | 'ghost' | 'classic' | 'solid' | 'soft' | 'surface';
  disabled?: boolean;
}

const Button = ({ type, label, onClick, size, variant, disabled }: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick} size={size} variant={variant} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

export default Button;
