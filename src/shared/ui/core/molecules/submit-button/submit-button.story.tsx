import { storiesOf } from '@storybook/react-native';
import { SubmitButton } from './submit-button';

storiesOf('ui/molecules', module).add('submit-button', () => {
  return <SubmitButton title="Продолжить" checkConditions={() => void 0} />;
});
