import { styled } from '@shared/ui/theme';
import { storiesOf } from '@storybook/react-native';
import { CashbackText } from './cashback-text';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  justify-content: center;
  align-items: center;
`;

storiesOf('ui/molecules', module).add('cashback-text', () => {
  return (
    <Wrapper>
      <CashbackText CASHBACK_SUM="500" CASHBACK_PERCENT={10} />
    </Wrapper>
  );
});
