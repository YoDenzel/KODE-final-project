import { storiesOf } from '@storybook/react-native';
import { ConfirmationPage } from './confirmation-page';

storiesOf('ui/pages', module).add('confirmation-page', () => {
  return (
    <ConfirmationPage
      header={{
        title: 'Подтверждение',
        navigation: { navigate: () => {}, goBack: () => {} },
      }}
      submitButton={{
        checkConditions: () => void 0,
        wayTo: '',
        title: 'Подтвердить ',
      }}
      confirmationCondition={{
        linkText:
          'Нажимая на кнопку продолжить, вы соглашаетесь с условиями проведения операции',
      }}
      confirmationList={{
        list: [],
      }}
    />
  );
});
