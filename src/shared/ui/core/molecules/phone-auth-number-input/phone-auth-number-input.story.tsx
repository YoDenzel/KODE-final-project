import { styled } from '@shared/ui/theme';
import { storiesOf } from '@storybook/react-native';
import { PhoneAuthNumberInput } from './phone-auth-number-input';
import { boolean, text } from '@storybook/addon-knobs';

const Background = styled.View``;

storiesOf('ui/molecules', module).add('phone-auth-number-input', () => {
  return (
    <Background>
      <PhoneAuthNumberInput
        input={''}
        setInput={() => void 0}
        placeholderText={text('placeholder', 'yo')}
        isPageAuth={boolean('isPageAuth', false)}
        setPhoneInputClicked={() => void 0}
        phoneInputClicked={true}
        hasSnacks={boolean('hasSnacks', false)}
      />
    </Background>
  );
});
