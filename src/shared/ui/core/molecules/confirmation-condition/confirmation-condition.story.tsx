import { styled } from '@shared/ui/theme';
import { storiesOf } from '@storybook/react-native';
import { ConfirmationCondition } from './confirmation-condition';

const Background = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  justify-content: center;
  align-items: center;
`;

storiesOf('ui/molecules', module).add('confirmation-condition', () => {
  return (
    <Background>
      <ConfirmationCondition linkText="Нажимая на кнопку продолжить, вы соглашаетесь с условиями проведения операции" />
    </Background>
  );
});
