import { storiesOf } from '@storybook/react-native';
import { Icons } from '../../atoms';
import { EverythingGoodPage } from './everything-good-page';

storiesOf('ui/pages', module).add('everything-good-page', () => {
  return (
    <EverythingGoodPage
      submitButton={{ title: 'Войти', checkConditions: () => void 0 }}
      everythingReadyBlock={{
        image: <Icons.Hands />,
        title: 'Все готово',
        info: 'Теперь вы можете использовать мобильное приложение Kode Bank',
      }}
    />
  );
});
