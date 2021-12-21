import { PasswordPage } from '@shared/ui/core/pages';
import { useState } from 'react';

export const PasswordPageConnector = () => {
  const [passwordShow, setPasswordShow] = useState<boolean>(false);

  return (
    <PasswordPage
      cancelAuth
      submitButton={{ title: 'Войти', checkConditions: () => void 0 }}
      kodeLogo
      passwordInput={{
        input: '',
        setInput: () => void 0,
        placeholderText: 'Пароль',
        setPasswordShow: setPasswordShow,
        passwordShow: passwordShow,
      }}
      snackBar={{
        snack: [],
        success: true,
      }}
    />
  );
};
