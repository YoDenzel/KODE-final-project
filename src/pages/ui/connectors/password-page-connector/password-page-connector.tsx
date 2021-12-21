import { PasswordPage } from '@shared/ui/core/pages';

export const PasswordPageConnector = () => {
  return (
    <PasswordPage
      cancelAuth
      submitButton={{ title: 'Войти', checkConditions: () => void 0 }}
      kodeLogo
      passwordInput={{
        input: '',
        setInput: () => void 0,
        placeholderText: 'Пароль',
      }}
      snackBar={{
        snack: [],
        success: true,
      }}
    />
  );
};
