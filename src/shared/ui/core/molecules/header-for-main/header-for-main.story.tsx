import { storiesOf } from '@storybook/react-native';
import { MainHeader } from './header-for-main';

storiesOf('ui/molecules', module).add('header-for-main', () => {
  return <MainHeader title={'Платежи'} />;
});
