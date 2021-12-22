import { storiesOf } from '@storybook/react-native';
import { styled } from '@shared/ui/theme';
import { OtpBlock } from './otp-block';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  height: 200px;
  justify-content: center;
  align-content: center;
`;

storiesOf('ui/organisms', module).add('otp-block', () => {
  return (
    <Wrapper>
      <OtpBlock
        title={'На ваш номер отправлено SMS с кодом подтверждения'}
        otp={''}
        errorText={''}
        loading={false}
        amountOfTries={0}
      />
    </Wrapper>
  );
});
