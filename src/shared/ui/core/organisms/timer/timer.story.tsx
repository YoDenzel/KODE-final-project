import { storiesOf } from '@storybook/react-native';
import { styled } from '@shared/ui/theme';
import { Timer } from './timer';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

storiesOf('ui/organisms', module).add('timer', () => {
  return (
    <Wrapper>
      <Timer
        title="Выслать код повторно"
        seconds={0}
        minutes={0}
        sendRequestAgain={() => void 0}
      />
    </Wrapper>
  );
});
