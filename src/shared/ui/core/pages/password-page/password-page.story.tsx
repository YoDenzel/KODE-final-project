import { storiesOf } from '@storybook/react-native';
import { PasswordPage } from './password-page';

storiesOf('ui/pages', module).add('password-page', () => {
  return (
    <PasswordPage
      cancelAuth
      submitButton={{ title: 'Войти', checkConditions: () => void 0 }}
      kodeLogo
      passwordInput={{
        input: '123',
        setInput: () => void 0,
        placeholderText: 'Пароль',
      }}
      snackBar={{
        snack: [],
        success: true,
      }}
    />
  );
});
