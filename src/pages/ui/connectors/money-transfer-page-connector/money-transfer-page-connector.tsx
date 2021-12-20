import { useStore } from 'effector-react';
import { useCallback, useEffect, useState } from 'react';
import {
  $hasSnack,
  $queueSnack,
  snackAdded,
  $success,
  addSnack,
  $isPageAuth,
  setIsPageAuth,
} from '../../../../models';
import { MoneyTransferPage } from '@shared/ui/core/pages/money-transfer-page/money-transfer-page';
import { useGetServiceCashback } from '@shared/hooks';
import { useTheme } from 'styled-components';

interface TMoneyTransferPageOn {
  navigation: {
    navigate: (v1: string, v2: object) => void;
    goBack: () => void;
  };
  route: {
    params: { data: { icon: string; id: string; name: string } };
  };
}

export const id = Number(Date.now());

export const MoneyTransferPageConnector = ({
  navigation,
  route,
}: TMoneyTransferPageOn) => {
  const { data } = useGetServiceCashback(route.params.data.id);
  const [inputPhone, setInputPhone] = useState<string>('');
  const [inputMoney, setInputMoney] = useState<number>(0);
  const [clicked, setClicked] = useState(false);
  const [phoneInputClicked, setPhoneInputClicked] = useState(false);
  const isPageAuth = useStore($isPageAuth);
  const theme = useTheme();
  const moneyArr = [100, 500, 1000, 2500, 5000, 10000, 15000, 20000];
  const item = route.params.data;
  const snack = useStore($queueSnack);
  const success = useStore($success);
  const has = useStore($hasSnack);
  const CASHBACK_PERCENT = data && data.cashback_percentage / 100;
  const CASHBACK_SUM =
    CASHBACK_PERCENT &&
    String((inputMoney / (theme.spacing(12) + 4)) * CASHBACK_PERCENT);

  const check =
    inputPhone.length === 10 && inputMoney < 20001 && inputMoney > 0;

  const infoAlert = useCallback(() => {
    if (check) {
      snackAdded({
        title: 'Деньги успешно переведены',
        successful: true,
        id: id,
      });
    } else {
      snackAdded({
        title: 'Что-то пошло не так, проверьте заполненные поля',
        successful: false,
        id: id,
      });
    }
  }, [addSnack]);

  const queueForSnacks = () => {
    if (has) {
      setTimeout(infoAlert, 3600);
    } else {
      infoAlert();
    }
  };

  const checkConditions = () => {
    !check
      ? queueForSnacks()
      : navigation?.navigate('confirmation', {
          data: {
            inputMoney,
            CASHBACK_PERCENT,
            CASHBACK_SUM,
            item,
          },
        });
  };

  useEffect(() => {
    setIsPageAuth(false);
  }, []);

  return (
    <MoneyTransferPage
      moneySum={{
        moneyArr: moneyArr,
        title: 'Сумма',
        inputMoney: inputMoney,
        setInputMoney: setInputMoney,
        clicked: clicked,
        setClicked: setClicked,
        CASHBACK_SUM: CASHBACK_SUM,
        CASHBACK_PERCENT: CASHBACK_PERCENT,
      }}
      creditCard={{
        title: 'Карта для оплаты',
        AmountOfMoney: '334 556,26',
        CardFor: 'Карта зарплатная',
      }}
      header={{
        title: item.name,
        navigation,
      }}
      submitButton={{
        title: 'Продолжить',
        checkConditions: checkConditions,
      }}
      phoneNumber={{
        items_icon: item.icon,
        input: inputPhone,
        setInput: setInputPhone,
        placeholderText: 'Номер телефона',
        isPageAuth: isPageAuth,
        setPhoneInputClicked: setPhoneInputClicked,
        phoneInputClicked: phoneInputClicked,
      }}
      navigation={navigation}
      snackBar={{
        snack: snack,
        success: success,
      }}
    />
  );
};
