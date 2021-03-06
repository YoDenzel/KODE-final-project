import { useEffect } from 'react';
import { Alert } from 'react-native';
import { useStore } from 'effector-react';
import { DeleteLastSymbol } from '@shared/ui/core/molecules';
import { Timer } from '@shared/ui/core/organisms';
import { OtpConfirmationPage } from '@shared/ui/core/pages/otp-confirmation-page';
import {
  $timerMinutes,
  $timerSeconds,
  setTimerSeconds,
  setTimerMinutes,
  $inputPhone,
  $inputOtp,
  resetTimer,
  $postAuthCode,
  setAmountOfTries,
  resetOtp,
  $amountOfTries,
  resetAmountOfTries,
  $postAuthId,
  resetPhone,
  addGuestToken,
} from '../../../../models';
import { usePostAuthOtp } from '@shared/hooks/use-post-auth-otp';
import { TRoute } from '../confirmation-page-connector/types';
import { usePostAuthConfirm } from '@shared/hooks';

export const OtpConfirmationPageConnector = ({ navigation, route }: TRoute) => {
  const { mutateAsync } = usePostAuthOtp();
  const { mutateAsync: mutate, data, isLoading, status } = usePostAuthConfirm();
  const inputPhone = useStore($inputPhone);
  const otp = useStore($inputOtp);
  const minutes = useStore($timerMinutes);
  const seconds = useStore($timerSeconds);
  const authCode = useStore($postAuthCode);
  const amountOfTries = useStore($amountOfTries);
  const phoneInputClicked = true;
  const otpCode = useStore($postAuthCode);
  const otpId = useStore($postAuthId);

  addGuestToken(data?.guestToken);

  const errorNavigation = () => {
    navigation.navigate('phoneAuth', {});
    resetPhone();
  };

  const successPostGuestToken = () => {
    mutate({ inputPhone, otpCode, otpId });
    resetAmountOfTries();
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
      sendRequestAgain={sendRequestAgain}
    />,
    '0',
    <DeleteLastSymbol route={route} />,
  ];

  useEffect(() => {
    if (otp.length === 4) {
      if (otp !== authCode) {
        setAmountOfTries(1);
        resetOtp();
        if (amountOfTries === 1) {
          errorAlert();
        }
      } else {
        successPostGuestToken();
      }
    }
  }, [otp]);

  useEffect(() => {
    if (otp.length === 4) {
      if (status === 'success') {
        navigation.navigate('passwordAuth', {});
        resetOtp();
      } else if (status === 'error') {
        navigation.navigate('error', {});
        resetOtp();
      }
    }
  }, [status]);

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
        loading: isLoading,
        amountOfTries: amountOfTries,
      }}
      customKeyboard={{
        input: '',
        keyboardItems: keyboardItems,
        phoneInputClicked: phoneInputClicked,
        isOtp: route.name,
        loading: isLoading,
      }}
    />
  );
};
