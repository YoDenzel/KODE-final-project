import { storiesOf } from '@storybook/react-native';
import { ServicePage } from './service-page';

const data = [
  {
    service_id: '11',
    service_name: 'МТС',
    service_icon: 'https://github.com/kode-frontend/files/raw/main/MTS.png',
  },
  {
    service_id: '12',
    service_name: 'МегаФон',
    service_icon: 'https://github.com/kode-frontend/files/raw/main/megafon.png',
  },
  {
    service_id: '13',
    service_name: 'Beeline',
    service_icon: 'https://github.com/kode-frontend/files/raw/main/beeline.png',
  },
  {
    service_id: '14',
    service_name: 'Tele2',
    service_icon: 'https://github.com/kode-frontend/files/raw/main/tele2.png',
  },
  {
    service_id: '15',
    service_name: 'Kode Mobile',
    service_icon: 'https://github.com/kode-frontend/files/raw/main/kode.png',
  },
];

storiesOf('ui/pages', module).add('service-page', () => {
  const services = data.map(item => ({
    id: item.service_id,
    name: item.service_name,
    icon: item.service_icon,
  }));

  return (
    <ServicePage
      searchPhrase=""
      header={{
        title: 'Мобильная связь',
        searchPhrase: '',
        setSearchPhrase: () => null,
        clicked: false,
        setClicked: () => null,
        navigation: { navigate: () => null, goBack: () => null },
      }}
      url="services"
      menu={{
        services,
        url: 'services',
        navigation: {
          navigate: () => null,
        },
      }}
      snackBar={{
        snack: [],
        success: true,
      }}
    />
  );
});
