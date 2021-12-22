import { Icons } from '@shared/ui/core/atoms';
import { ErrorPage } from '@shared/ui/core/pages';
import { TRoute } from '../confirmation-page-connector/types';

export const ErrorPageConnector = ({ navigation }: TRoute) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <ErrorPage
      cancelButton={{ quit: goBack }}
      submitButton={{ title: 'Повторить', checkConditions: goBack }}
      errorBlock={{
        image: <Icons.Error />,
        title: 'Внимание',
        info: 'Сервер временно недоступен. Пожалуйста, повторите попытку позднее',
      }}
    />
  );
};
