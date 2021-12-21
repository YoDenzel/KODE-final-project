import { DeleteLastSymbol } from '@shared/ui/core/molecules';
import { Timer } from '@shared/ui/core/organisms';
import { OtpConfirmationPage } from '@shared/ui/core/pages/otp-confirmation-page';
import { useStore } from 'effector-react';
import {
  $timerMinutes,
  $timerSeconds,
  setTimerSeconds,
  setTimerMinutes,
  $inputPhone,
  $isPageOtp,
  setIsPageOtp,
  $inputOtp,
  resetTimer,
  $postAuthCode,
  setAmountOfTries,
  resetOtp,
  $amountOfTries,
  resetAmountOfTries,
} from '../../../../models';
import { useEffect, useState } from 'react';
import { usePostAuthOtp } from '@shared/hooks/use-post-auth-otp';
import { Alert } from 'react-native';
import { TRoute } from '../confirmation-page-connector/types';

export const OtpConfirmationPageConnector = ({ navigation, route }: TRoute) => {
  const { mutateAsync, data, status } = usePostAuthOtp();
  const inputPhone = useStore($inputPhone);
  const [loading, setLoading] = useState(false);
  const otp = useStore($inputOtp);
  const minutes = useStore($timerMinutes);
  const seconds = useStore($timerSeconds);
  const isOtp = useStore($isPageOtp);
  const authCode = useStore($postAuthCode);
  const amountOfTries = useStore($amountOfTries);
  const randomKey = () => Math.random();
  const phoneInputClicked = true;

  const errorNavigation = () => {
    navigation.navigate('phoneAuth', {});
  };

  const errorAlert = () => {
    Alert.alert('Вы ввели код неверно 5 раз', 'Данная сесcия будет сброшена', [
      {
        text: 'Выход',
        onPress: () => {
          errorNavigation();
        },
      },
    ]);
    resetAmountOfTries();
  };

  const sendRequestAgain = () => {
    mutateAsync({
      inputPhone: inputPhone,
    });
    resetTimer();
  };
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
    <Timer
      title="Выслать код повторно"
      minutes={minutes}
      seconds={seconds}
      sendRequestAgaing={sendRequestAgain}
    />,
    '0',
    <DeleteLastSymbol />,
  ];

  useEffect(() => {
    if (otp.length === 4) {
      setLoading(true);
      if (otp !== authCode) {
        setAmountOfTries(1);
        if (amountOfTries === 1) {
          errorAlert();
        }
      }
      resetOtp();
      setLoading(false);
    }
  }, [otp]);

  useEffect(() => {
    setIsPageOtp(true);
  }, [route]);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setTimerSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setTimerMinutes(minutes - 1);
          setTimerSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [seconds, minutes]);

  return (
    <OtpConfirmationPage
      otpInput={{
        title: 'На ваш номер отправлено SMS с кодом подтверждения',
        otp: otp,
        errorText: `Неверный код. Осталось ${amountOfTries} попытки`,
        loading: loading,
        amountOfTries: amountOfTries,
      }}
      customKeyboard={{
        keyboardItems: keyboardItems,
        phoneInputClicked: phoneInputClicked,
        randomKey: randomKey,
        isOtp: isOtp,
        loading: loading,
      }}
    />
  );
};
