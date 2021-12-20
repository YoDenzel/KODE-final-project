import React from 'react';
import { styled } from '@shared/ui/theme';

interface CenterProps {}

const StyledView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  justify-content: center;
  align-items: center;
`;

export const Center: React.FC<CenterProps> = ({ children }) => {
  return <StyledView>{children}</StyledView>;
};
