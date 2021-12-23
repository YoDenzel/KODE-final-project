import { PasswordPage } from '@shared/ui/core/pages';
import { useStore } from 'effector-react';
import {
  $hasSnack,
  $queueSnack,
  $snacks,
  resetPhone,
  snackAdded,
  snackLifeTimeFx,
} from '../../../../models';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { TRoute } from '../confirmation-page-connector/types';
import { usePostAuthEnter } from '@shared/hooks';
import { createEffect } from 'effector';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const PasswordPageConnector = ({ navigation }: TRoute) => {
  const { mutateAsync, status } = usePostAuthEnter();
  const [passwordShow, setPasswordShow] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const snack = useStore($queueSnack);
  const snacksStorage = useStore($snacks);
  const has = useStore($hasSnack);
  const id = Number(Date.now());
  const [guestToken, setGuestToken] = useState<string | null>('');

  const fetchCountFromAsyncStorageFx = createEffect({
    async handler() {
      const value = await AsyncStorage.getItem('guestToken');
      setGuestToken(value);
      return value;
    },
  });

  const queueForSnacks = () => {
    if (has) {
      setTimeout(checkCondition, 3500);
    } else {
      checkCondition();
    }
  };

  useEffect(() => {
    fetchCountFromAsyncStorageFx();
  }, []);

  useEffect(() => {
    snackLifeTimeFx();
  }, [snacksStorage]);

  const passwordValidation = () => {
    if (input.length < 5) {
      snackAdded({
        title: 'Пароль должен быть 5 символов!',
        id: id,
        successful: false,
      });
    } else if (
      input.match(/[!#$%&? @а-яА-Я"]/ || input.search(/[a-zA-Z0-9]/))
    ) {
      snackAdded({
        title: 'Пароль может содержать только  цифры и латинские буквы!',
        id: id,
        successful: false,
      });
    } else {
      mutateAsync({ guestToken: guestToken, input: input });
    }
  };

  const checkCondition = () => {
    passwordValidation();
  };

  useEffect(() => {
    if (status === 'success') {
      navigation.navigate('everythingGood', {});
    } else if (status === 'error') {
      navigation.navigate('error', {});
      setInput('');
    }
  }, [status]);

  const quit = () => {
    Alert.alert('Вы точно хотите выйти?', '', [
      {
        text: 'Отмена',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Выйти',
        onPress: () => {
          navigation.navigate('phoneAuth', {});
        },
      },
    ]);
    resetPhone();
  };

  return (
    <PasswordPage
      cancelAuth={{ quit: quit }}
      submitButton={{ title: 'Войти', checkConditions: queueForSnacks }}
      kodeLogo
      passwordInput={{
        input: input,
        setInput: setInput,
        placeholderText: 'Пароль',
        setPasswordShow: setPasswordShow,
        passwordShow: passwordShow,
      }}
      snackBar={{
        snack: snack,
        success: false,
      }}
    />
  );
};
