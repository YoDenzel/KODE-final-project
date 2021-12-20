import { styled } from '@shared/ui/theme';
import { ReactNode } from 'react';

const Background = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
`;

const Flex1 = styled.View`
  flex: 1;
`;

type TConfirmationTemplate = {
  confirmationList: ReactNode;
  header: ReactNode;
  submitButton: ReactNode;
  confirmationCondition: ReactNode;
};

export const ConfirmationTemplate = ({
  header,
  submitButton,
  confirmationCondition,
  confirmationList,
}: TConfirmationTemplate) => {
  return (
    <>
      <Background>
        {header}
        {confirmationList}
        {submitButton}
        <Flex1 />
        {confirmationCondition}
        <Flex1 />
      </Background>
    </>
  );
};
