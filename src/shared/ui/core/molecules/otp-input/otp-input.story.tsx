import { styled } from '@shared/ui/theme';
import { storiesOf } from '@storybook/react-native';
import { OtpInput } from './otp-input';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

storiesOf('ui/molecules', module).add('otp-input', () => {
  return (
    <Wrapper>
      <OtpInput />
    </Wrapper>
  );
});
