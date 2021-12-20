import { styled } from '@shared/ui/theme';
import { storiesOf } from '@storybook/react-native';
import { Timer } from './timer';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

storiesOf('ui/organisms', module).add('timer', () => {
  return (
    <Wrapper>
      <Timer title="Выслать код повторно" />
    </Wrapper>
  );
});
