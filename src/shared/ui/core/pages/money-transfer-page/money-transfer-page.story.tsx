import { storiesOf } from '@storybook/react-native';
import { MoneyTransferPage } from './money-transfer-page';

storiesOf('ui/pages', module).add('money-transfer-page', () => {
  return (
    <MoneyTransferPage
      header={{
        title: 'blabla',
        navigation: { navigate: () => {}, goBack: () => {} },
      }}
      submitButton={{
        checkConditions: () => void 0,
        title: 'Продолжить',
      }}
      phoneNumber={{
        items_icon: 'https://github.com/kode-frontend/files/raw/main/MTS.png',
        input: '',
        setInput: () => {},
        placeholderText: 'Введите номер телефона',
        isPageAuth: false,
        setPhoneInputClicked: () => void 0,
        phoneInputClicked: false,
      }}
      moneySum={{
        inputMoney: 500,
        title: 'Сумма',
        moneyArr: [100, 500, 1000, 2500, 5000, 10000, 15000, 20000],
        setInputMoney: () => null,
        clicked: false,
        setClicked: () => void 0,
        CASHBACK_PERCENT: 17,
        CASHBACK_SUM: '500',
      }}
      creditCard={{
        title: 'Карта для оплаты',
        AmountOfMoney: '334 556,26',
        CardFor: 'Карта зарплатная',
      }}
      navigation={{ navigate: () => {}, goBack: () => {} }}
      snackBar={{ snack: [], success: true }}
    />
  );
});
