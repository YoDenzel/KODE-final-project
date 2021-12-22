import { Icons } from '@shared/ui/core/atoms';
import { ErrorPage } from '@shared/ui/core/pages';

export const ErrorPageConnector = () => {
  return (
    <ErrorPage
      cancelButton={{ quit: () => void 0 }}
      submitButton={{ title: 'Войти', checkConditions: () => void 0 }}
      errorBlock={{
        image: <Icons.Error />,
        title: 'Внимание',
        info: 'Сервер временно недоступен. Пожалуйста, повторите попытку позднее',
      }}
    />
  );
};
