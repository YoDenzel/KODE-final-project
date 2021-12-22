import { storiesOf } from '@storybook/react-native';
import { EverythingGoodPage } from './everything-good-page';

storiesOf('ui/pages', module).add('everything-good-page', () => {
  return (
    <EverythingGoodPage
      submitButton={{ title: 'Войти', checkConditions: () => void 0 }}
      everythingReadyBlock={{
        title: 'Все готово',
        info: 'Теперь вы можете использовать мобильное приложение Kode Bank',
      }}
    />
  );
});
