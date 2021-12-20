import { styled } from '@shared/ui/theme';
import { storiesOf } from '@storybook/react-native';
import { CustomKeyboardSingleNumber } from './custom-keyboard-single-number';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

storiesOf('ui/molecules', module).add('custom-keyboard-single-number', () => {
  return (
    <Wrapper>
      <CustomKeyboardSingleNumber number="1" />
    </Wrapper>
  );
});
