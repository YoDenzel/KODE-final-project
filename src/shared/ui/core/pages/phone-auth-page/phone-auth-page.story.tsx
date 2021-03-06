import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { HideKeyboardButton, DeleteLastSymbol } from '../../molecules';
import { PhoneAuthPage } from './phone-auth-page';

storiesOf('ui/pages', module).add('phone-auth-page', () => {
  return (
    <PhoneAuthPage
      submitButton={{
        title: 'Войти',
        checkConditions: () => void 0,
      }}
      phoneInput={{
        input: text('input', ''),
        setInput: () => {},
        placeholderText: 'Телефон',
        isPageAuth: true,
        setPhoneInputClicked: () => void 0,
        phoneInputClicked: true,
      }}
      kodeLogo
      customKeyboard={{
        input: '',
        isOtp: '',
        phoneInputClicked: false,
        keyboardItems: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          <HideKeyboardButton
            title="Отменить"
            setPhoneInputClick={() => void 0}
          />,
          '0',
          <DeleteLastSymbol
            route={{
              name: '',
            }}
          />,
        ],
      }}
      snackBar={{ snack: [], success: true }}
    />
  );
});
