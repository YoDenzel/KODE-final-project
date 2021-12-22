import { Icons } from '@shared/ui/core/atoms';
import { EverythingGoodPage } from '@shared/ui/core/pages/everything-good-page';
import { TRoute } from '../confirmation-page-connector/types';

export const EverythingGoodPageConnector = ({ navigation }: TRoute) => {
  const checkConditions = () => {
    navigation.navigate('tabs', {});
  };

  return (
    <EverythingGoodPage
      submitButton={{ title: 'Войти', checkConditions: checkConditions }}
      everythingReadyBlock={{
        image: <Icons.Hands />,
        title: 'Все готово',
        info: 'Теперь вы можете использовать мобильное приложение Kode Bank',
      }}
    />
  );
};