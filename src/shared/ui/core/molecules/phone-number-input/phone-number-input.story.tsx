import { storiesOf } from '@storybook/react-native';
import { PhoneNumberInput } from './phone-number-input';

storiesOf('ui/molecules', module).add('phone-number-input', () => {
  return (
    <PhoneNumberInput
      input={''}
      setInput={() => {}}
      items_icon="https://github.com/kode-frontend/files/raw/main/MTS.png"
      placeholderText={''}
      isPageAuth={false}
      setPhoneInputClicked={() => void 0}
      phoneInputClicked={false}
    />
  );
});
