import { usePostAuthOtp } from '@shared/hooks/use-post-auth-otp';
import {
  DeleteLastSymbol,
  HideKeyboardButton,
} from '@shared/ui/core/molecules';
import { PhoneAuthPage } from '@shared/ui/core/pages/phone-auth-page/phone-auth-page';
import { useStore } from 'effector-react';
import { useEffect, useState } from 'react';
import { TRoute } from '../confirmation-page-connector/types';
import { id } from '../money-transfer-page-connector/money-transfer-page-connector';
import {
  $hasSnack,
  $inputPhone,
  $isPageAuth,
  $queueSnack,
  $snacks,
  $success,
  setInputPhone,
  setIsPageAuth,
  setPostAuthCode,
  setPostAuthId,
  snackAdded,
  snackLifeTimeFx,
} from './../../../../models';

export const PhoneAuthPageConnector = ({ navigation, route }: TRoute) => {
  const { mutateAsync, isLoading, data, status } = usePostAuthOtp();
  const [phoneInputClicked, setPhoneInputClicked] = useState(false);
  const inputPhone = useStore($inputPhone);
  const isPageAuth = useStore($isPageAuth);
  const success = useStore($success);
  const snack = useStore($queueSnack);
  const snacksStorage = useStore($snacks);
  const has = useStore($hasSnack);
  const randomKey = () => Math.random();
  const queueForSnacks = () => {
    if (has) {
      setTimeout(checkCondition, 3600);
    } else {
      checkCondition();
    }
  };

  useEffect(() => {
    snackLifeTimeFx();
  }, [snacksStorage]);

  const checkCondition = () => {
    if (inputPhone.length !== 10) {
      snackAdded({
        title: 'Пожалуйста, убедитесь, что вы правильно ввели номер телефона',
        id: id,
        successful: false,
      });
    } else {
      mutateAsync({
        inputPhone: inputPhone,
      });
    }
  };

  useEffect(() => {
    setIsPageAuth(true);
    setPostAuthCode(data?.otpCode);
    setPostAuthId(data?.otpId);
    if (status === 'success') {
      navigation.navigate('otpAuth', {});
    }
  }, [data]);

  const keyboardItems = [
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
      setPhoneInputClick={setPhoneInputClicked}
    />,
    '0',
    <DeleteLastSymbol route={route} />,
  ];

  return (
    <PhoneAuthPage
      submitButton={{
        title: 'Войти',
        checkConditions: queueForSnacks,
      }}
      phoneInput={{
        items_icon: 'https://github.com/kode-frontend/files/raw/main/MTS.png',
        input: inputPhone,
        setInput: setInputPhone,
        placeholderText: 'Телефон',
        isPageAuth: isPageAuth,
        setPhoneInputClicked: setPhoneInputClicked,
        phoneInputClicked: phoneInputClicked,
        hasSnacks: has,
        isLoading: isLoading,
      }}
      kodeLogo
      customKeyboard={{
        keyboardItems: keyboardItems,
        phoneInputClicked: phoneInputClicked,
        isOtp: route.name,
      }}
      snackBar={{
        success: success,
        snack: snack,
      }}
    />
  );
};
