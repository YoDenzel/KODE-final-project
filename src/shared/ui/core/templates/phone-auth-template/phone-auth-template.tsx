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
  kodeLogo: ReactNode;
  submitButtton: ReactNode;
  phoneInput: ReactNode;
}

export const PhoneAuthTemplate = ({
  kodeLogo,
  submitButtton,
  phoneInput,
}: TPhoneAuthTemplate) => {
  return (
    <>
      <Background>
        <Flex1 />
        {kodeLogo}
        <Flex1 />
        {phoneInput}
        <Flex1 />
        {submitButtton}
      </Background>
    </>
  );
};