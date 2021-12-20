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
} from '../../../../models';
import { useEffect } from 'react';
import { usePostAuthOtp } from '@shared/hooks/use-post-auth-otp';

export const OtpConfirmationPageConnector = () => {
  const { mutateAsync } = usePostAuthOtp();
  const inputPhone = useStore($inputPhone);
  const minutes = useStore($timerMinutes);
  const seconds = useStore($timerSeconds);
  const isOtp = useStore($isPageOtp);
  const randomKey = () => Math.random();
  const phoneInputClicked = true;
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
    <Timer title="Выслать код повторно" minutes={minutes} seconds={seconds} />,
    '0',
    <DeleteLastSymbol />,
  ];

  useEffect(() => {
    setIsPageOtp(true);
  }, []);

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
  }, [seconds]);

  return (
    <OtpConfirmationPage
      otpInput={{
        title: 'На ваш номер отправлено SMS с кодом подтверждения',
      }}
      customKeyboard={{
        keyboardItems: keyboardItems,
        phoneInputClicked: phoneInputClicked,
        randomKey: randomKey,
        isOtp: isOtp,
      }}
    />
  );
};
