import { storiesOf } from '@storybook/react-native';
import { DeleteLastSymbol, HideKeyboardButton } from '../../molecules';
import { CustomKeyboard } from './custom-keyboard';

storiesOf('ui/organisms', module).add('custom-keyboard', () => {
  return (
    <CustomKeyboard
      phoneInputClicked={true}
      keyboardItems={[
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        <HideKeyboardButton
          title="Отменить"
          setPhoneInputClick={() => void 0}
        />,
        '0',
        <DeleteLastSymbol />,
      ]}
      randomKey={() => void 0}
    />
  );
});
