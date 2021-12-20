import { storiesOf } from '@storybook/react-native';
import { SnackBar } from './snackbar';

storiesOf('ui/molecules', module).add('snackbar', () => {
  return <SnackBar message="Все получилось!" success={true} />;
});
