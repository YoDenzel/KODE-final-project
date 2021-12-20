import { storiesOf } from '@storybook/react-native';
import { PlugPage } from './plug-page';

storiesOf('ui/pages', module).add('plug-page', () => {
  return <PlugPage headerTitle="Главная" title={'Главная'} />;
});
