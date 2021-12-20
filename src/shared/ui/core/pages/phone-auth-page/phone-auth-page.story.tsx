import { storiesOf } from '@storybook/react-native';
import { PhoneAuthPage } from './phone-auth-page';

storiesOf('ui/pages', module).add('phone-auth-page', () => {
  return (
    <PhoneAuthPage
      submitButton={{
        title: 'Войти',
        checkConditions: () => void 0,
      }}
      phoneInput={{
        items_icon: 'https://github.com/kode-frontend/files/raw/main/MTS.png',
        input: '',
        setInput: () => {},
        placeholderText: 'Введите номер телефона',
      }}
      kodeLogo
    />
  );
});
