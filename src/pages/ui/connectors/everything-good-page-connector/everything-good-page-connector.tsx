import { EverythingGoodPage } from '@shared/ui/core/pages/everything-good-page';

export const EverythingGoodPageConnector = () => {
  return (
    <EverythingGoodPage
      submitButton={{ title: 'Войти', checkConditions: () => void 0 }}
      everythingReadyBlock={{
        title: 'Все готово',
        info: 'Теперь вы можете использовать мобильное приложение Kode Bank',
      }}
    />
  );
};
