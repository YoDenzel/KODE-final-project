import { usePostHistory } from '@shared/hooks';
import { ConfirmationPage } from '@shared/ui/core/pages/confirmation-page';
import { useStore } from 'effector-react';
import {
  $postHistorySuccess,
  setPostHistorySuccess,
} from './../../../../models';
import { TRoute } from './types';

export const ConfirmationPageConnector = ({ route, navigation }: TRoute) => {
  const { mutateAsync, isLoading } = usePostHistory();

  const items = route.params.data;
  const names = [
    'Виталий Викторович Цаль',
    'Билли Иванович Херингтон',
    'Брэд Николаевич Питт',
    'Макс Андреевич Ферстаппен',
  ];

  function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const random_name = names[getRandomIntInclusive(0, 3)];

  const checkConditions = () => {
    navigation?.navigate('acceptedDeclined', {
      data: items.inputMoney,
      isLoading,
    });
    mutateAsync({
      id: items.item.id,
      inputMoney: items.inputMoney,
      CASHBACK_SUM: items.CASHBACK_SUM,
    });
  };

  const arr = [
    { title: 'Карта для оплаты', info: 'Карта зарплатная' },
    { title: 'Телефон получателя', info: '+7 951 775 52 24' },
    { title: 'Мобильный оператор', info: items.item.name },
    { title: 'Имя получаетля', info: random_name },
    { title: 'Сумма платежа', info: String(items.inputMoney) + ' ₽' },
    { title: 'Кешбек', info: String(items.CASHBACK_SUM) + ' ₽' },
  ];
  return (
    <ConfirmationPage
      header={{
        title: 'Подтверждение',
        navigation: navigation,
      }}
      submitButton={{
        title: 'Подтвердить',
        checkConditions: checkConditions,
      }}
      confirmationCondition={{
        linkText:
          'Нажимая на кнопку продолжить, вы соглашаетесь с условиями проведения операции',
      }}
      confirmationList={{
        list: arr,
      }}
    />
  );
};
