import { storiesOf } from '@storybook/react-native';
import { Icons } from '../../atoms';
import { ErrorPage } from './error-page';

storiesOf('ui/pages', module).add('error-page', () => {
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
});
