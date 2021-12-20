import { Center } from '@pages/ui';
import { storiesOf } from '@storybook/react-native';
import { GoBack } from '.';

storiesOf('ui/molecules', module).add('go-back', () => {
  return (
    <Center>
      <GoBack navigation={{ navigate: () => {}, goBack: () => {} }} />
    </Center>
  );
});
