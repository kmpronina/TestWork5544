'use client';

import { NotFoundWrapper, NotFoundText } from './NotFound.style';

interface NotFoundProps {
  text?: string;
}

export default function NotFound({ text }: NotFoundProps) {
  return (
    <NotFoundWrapper>
      <NotFoundText>{text || 'The page you are looking for does not exist.'}</NotFoundText>
    </NotFoundWrapper>
  );
}
