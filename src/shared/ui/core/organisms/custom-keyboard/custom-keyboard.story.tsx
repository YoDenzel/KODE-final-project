import { storiesOf } from '@storybook/react-native';
import { CustomKeyboard } from './custom-keyboard';

storiesOf('ui/organisms', module).add('custom-keyboard', () => {
  return <CustomKeyboard />;
});
