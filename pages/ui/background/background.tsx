import React from 'react';
import { styled } from '@shared/ui/theme';

interface CenterProps {}

const StyledView = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
`;

export const Background: React.FC<CenterProps> = ({ children }) => {
  return <StyledView>{children}</StyledView>;
};
