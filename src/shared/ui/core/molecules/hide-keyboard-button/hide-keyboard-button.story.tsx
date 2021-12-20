import { styled } from '@shared/ui/theme';
import { storiesOf } from '@storybook/react-native';
import { HideKeyboardButton } from './hide-keyboard-button';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

storiesOf('ui/molecules', module).add('hide-keyboard-button', () => {
  return (
    <Wrapper>
      <HideKeyboardButton title="Отменить" setPhoneInputClick={() => void 0} />
    </Wrapper>
  );
});
