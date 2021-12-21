import { styled } from '@shared/ui/theme';
import { ReactNode } from 'react';

const Background = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
`;

const Flex1 = styled.View`
  flex: 1;
`;

interface TPhoneAuthTemplate {
  quitButton?: ReactNode;
  kodeLogo: ReactNode;
  submitButtton: ReactNode;
  phoneInput: ReactNode;
  customKeyboard?: ReactNode;
  snackBar?: ReactNode;
}

export const PhoneAuthTemplate = ({
  kodeLogo,
  submitButtton,
  phoneInput,
  customKeyboard,
  snackBar,
  quitButton,
}: TPhoneAuthTemplate) => {
  return (
    <>
      <Background>
        <Flex1 />
        {quitButton}
        {kodeLogo}
        {phoneInput}
        <Flex1 />
        {submitButtton}
        {customKeyboard}
        {snackBar}
      </Background>
    </>
  );
};
