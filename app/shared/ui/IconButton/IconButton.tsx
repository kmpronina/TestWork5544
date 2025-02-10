'use client';
import React from 'react';
import { PlusIcon } from '@radix-ui/react-icons';
import { Tooltip } from '@radix-ui/themes';
import { StyledIconButton } from './IconButton.style';

interface IconButtonProps {
  tooltip?: string;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconButton = ({ tooltip, icon, onClick }: IconButtonProps) => {
  return (
    <Tooltip content={tooltip}>
      <StyledIconButton radius='full' onClick={onClick}>
        {icon || <PlusIcon />}
      </StyledIconButton>
    </Tooltip>
  );
};

export default IconButton;
