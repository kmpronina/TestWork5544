'use client';

import { StyledSkeleton } from './Loading.style';

interface LoadingProps {
  height?: string;
  width?: string;
}
const Loading = ({ height, width }: LoadingProps) => {
  return <StyledSkeleton height={height || '200px'} width={width || '100%'} />;
};

export default Loading;
