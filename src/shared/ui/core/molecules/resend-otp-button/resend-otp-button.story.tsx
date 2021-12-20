import { styled } from '@shared/ui/theme';
import { storiesOf } from '@storybook/react-native';
import { ResendOtpButton } from './resend-otp-button';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

storiesOf('ui/molecules', module).add('hide-keyboard-button', () => {
  return (
    <Wrapper>
      <ResendOtpButton title="Выслать код повторно" />
    </Wrapper>
  );
});
