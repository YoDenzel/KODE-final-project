import { storiesOf } from '@storybook/react-native';
import { Icons } from '../../atoms';
import { TabBarIcon } from './tab-bar-icon';

storiesOf('ui/molecules', module).add('tab-bar-icon', () => {
  return <TabBarIcon title="Главная" Icon={Icons.Profile} focused={true} />;
});
