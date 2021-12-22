import { storiesOf } from '@storybook/react-native';
import { PasswordInput } from './password-input';

storiesOf('ui/molecules', module).add('password-input', () => {
  return (
    <PasswordInput
      input="yo"
      setInput={() => void 0}
      placeholderText="Пароль"
      passwordShow={true}
      setPasswordShow={() => void 0}
    />
  );
});
