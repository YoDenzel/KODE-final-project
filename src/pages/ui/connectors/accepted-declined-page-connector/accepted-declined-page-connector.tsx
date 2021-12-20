import { AcceptedDeclinedPage } from '@shared/ui/core/pages';
import { useStore } from 'effector-react';
import { $postHistorySuccess } from './../../../../models';

type TParams = {
  params: {
    data: number;
    isLoading: boolean;
  };
};

interface TAcceptedDeclinedConnector {
  route: TParams;
  navigation: {
    navigate: (v1: string) => void;
  };
}

export const AcceptedDeclinedConnector = ({
  route,
  navigation,
}: TAcceptedDeclinedConnector) => {
  const inputMoney = route.params.data;
  const isLoading = route.params.isLoading;
  const success = useStore($postHistorySuccess);
  const checkConditions = () => {
    navigation?.navigate('tabs');
  };

  return (
    <AcceptedDeclinedPage
      submitButton={{
        title: 'Готово',
        checkConditions: checkConditions,
      }}
      acceptedDeclinedText={{
        title: success ? 'Оплачено' : 'Платеж отклонен',
        info: `${inputMoney} ₽`,
        success: success,
        isLoading: isLoading,
      }}
    />
  );
};
