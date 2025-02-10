'use client';

import React from 'react';
import { StyledInput } from './Input.style';

interface InputProps {
  variant?: 'surface' | 'classic' | 'soft';
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input = ({ value, onChange, variant, placeholder, required }: InputProps) => {
  return (
    <StyledInput variant={variant} placeholder={placeholder} required={required} value={value} onChange={onChange} />
  );
};

export default Input;
