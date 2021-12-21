import { styled } from '@shared/ui/theme';
import { ReactNode } from 'react';
import { KeyboardAvoidingView } from 'react-native';

const Background = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
`;

const Flex1 = styled.View`
  flex: 1;
`;

interface TPhoneAuthTemplate {
  cancelAuth?: ReactNode;
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
  cancelAuth,
}: TPhoneAuthTemplate) => {
  return (
    <>
      <Background>
        <Flex1 />
        {cancelAuth}
        {kodeLogo}
        <Flex1 />
        {phoneInput}
        <Flex1 />
        {submitButtton}
        {customKeyboard}
        {snackBar}
      </Background>
    </>
  );
};
