import { PasswordPage } from '@shared/ui/core/pages';
import { useStore } from 'effector-react';
import {
  $hasSnack,
  $queueSnack,
  $snacks,
  snackAdded,
  snackLifeTimeFx,
} from '../../../../models';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { TRoute } from '../confirmation-page-connector/types';

export const PasswordPageConnector = ({ navigation }: TRoute) => {
  const [passwordShow, setPasswordShow] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const snack = useStore($queueSnack);
  const snacksStorage = useStore($snacks);
  const has = useStore($hasSnack);
  const id = Number(Date.now());

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

  const passwordValidation = () => {
    if (input.length < 5) {
      snackAdded({
        title: 'Пароль должен быть 5 символов!',
        id: id,
        successful: false,
      });
    } else if (input.match(/[!#$%&? @"]/ || input.search(/[a-zA-Z0-9]/))) {
      snackAdded({
        title: 'Пароль может содержать только латинские цифры и буквы!',
        id: id,
        successful: false,
      });
    }
  };

  const checkCondition = () => {
    passwordValidation();
  };

  const quit = () => {
    return Alert.alert('Вы точно хотите выйти?', '', [
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
