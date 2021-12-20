import { storiesOf } from '@storybook/react-native';
import { PaymentPage } from './payment-page';

const data = [
  {
    category_id: '1',
    category_name: 'Мобильная связь',
    category_icon:
      'https://github.com/kode-frontend/files/raw/main/1_mobile.png',
    services: [],
  },
  {
    category_id: '2',
    category_name: 'ЖКХ',
    category_icon: 'https://github.com/kode-frontend/files/raw/main/1_JKH.png',
    services: [],
  },
  {
    category_id: '3',
    category_name: 'Интернет',
    category_icon:
      'https://github.com/kode-frontend/files/raw/main/1_Internet.png',
    services: [],
  },
];

storiesOf('ui/pages', module).add('payment-page', () => {
  const services = data.map(item => ({
    id: item.category_id,
    name: item.category_name,
    services: item.services,
    icon: item.category_icon,
  }));
  return (
    <PaymentPage
      header={{
        title: 'Платежи',
      }}
      menu={{ services, url: 'services' }}
      url={'services'}
      searchPhrase=""
      snackBar={{
        snack: [],
        success: true,
      }}
    />
  );
});
