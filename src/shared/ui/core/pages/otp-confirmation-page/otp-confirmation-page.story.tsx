import { storiesOf } from '@storybook/react-native';
import { HideKeyboardButton, DeleteLastSymbol } from '../../molecules';
import { OtpConfirmationPage } from './otp-confirmation-page';

storiesOf('ui/pages', module).add('otp-confirmation-page', () => {
  return (
    <OtpConfirmationPage
      otpInput={{
        title: 'На ваш номер отправлено SMS с кодом подтверждения',
        amountOfTries: 2,
        errorText: 'Попробуйте еще раз',
        loading: false,
        otp: '12',
      }}
      customKeyboard={{
        input: '',
        isOtp: 'true',
        phoneInputClicked: true,
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
    />
  );
});
