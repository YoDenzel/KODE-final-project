import { storiesOf } from '@storybook/react-native';
import { HeaderForMoneyTransfer } from '.';

storiesOf('ui/molecules', module).add('header-for-money-transfer-page', () => {
  return (
    <HeaderForMoneyTransfer
      title="МТС"
      navigation={{ navigate: () => {}, goBack: () => {} }}
    />
  );
});
