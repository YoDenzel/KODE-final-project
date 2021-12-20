import { styled } from '@shared/ui/theme';
import { ReactNode } from 'react';

const Background = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
`;

const Flex1 = styled.View`
  flex: 1;
`;

interface TOtpConfrimationTemplate {
  customKeyboard: ReactNode;
  otpInput: ReactNode;
}

export const OtpConfirmationTemplate = ({
  customKeyboard,
  otpInput,
}: TOtpConfrimationTemplate) => {
  return (
    <>
      <Background>
        <Flex1 />
        {otpInput}
        {customKeyboard}
      </Background>
    </>
  );
};
