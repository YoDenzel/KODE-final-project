import { storiesOf } from '@storybook/react-native';
import { MenuItem } from './menu-item';

storiesOf('ui/molecules', module).add('menu-item', () => {
  return (
    <MenuItem
      name={'Мобильная связь'}
      icon={'https://github.com/kode-frontend/files/raw/main/1_mobile.png'}
      url="services"
      item={{ id: 'id', icon: 'icon', name: 'name' }}
    />
  );
});
