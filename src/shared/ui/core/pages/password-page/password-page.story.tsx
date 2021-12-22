import { storiesOf } from '@storybook/react-native';
import { PasswordPage } from './password-page';

storiesOf('ui/pages', module).add('password-page', () => {
  return (
    <PasswordPage
      cancelAuth={{ quit: () => void 0 }}
      submitButton={{ title: 'Войти', checkConditions: () => void 0 }}
      kodeLogo
      passwordInput={{
        input: '123',
        setInput: () => void 0,
        placeholderText: 'Пароль',
        setPasswordShow: () => void 0,
        passwordShow: true,
      }}
      snackBar={{
        snack: [],
        success: true,
      }}
    />
  );
});
