import { styled } from '@shared/ui/theme';
import { ReactNode } from 'react';

interface TAcceptedDeclinedTemplate {
  acceptedDeclinedText: ReactNode;
  submitButton: ReactNode;
}

const Background = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
`;

const Flex1 = styled.View`
  flex: 1;
`;

export const AcceptedDeclinedTemplate = ({
  acceptedDeclinedText,
  submitButton,
}: TAcceptedDeclinedTemplate) => {
  return (
    <>
      <Background>
        <Flex1 />
        {acceptedDeclinedText}
        <Flex1 />
        {submitButton}
      </Background>
    </>
  );
};
