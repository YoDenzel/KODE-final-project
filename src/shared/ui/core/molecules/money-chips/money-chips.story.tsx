import { styled } from '@shared/ui/theme';
import { storiesOf } from '@storybook/react-native';
import { MoneyChips } from './money-chips';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
`;

storiesOf('ui/molecules', module).add('money-chips', () => {
  return (
    <Wrapper>
      <MoneyChips
        setInputMoney={() => void 0}
        moneyArr={[100, 500, 1000, 2500, 5000, 10000, 15000, 20000]}
      />
    </Wrapper>
  );
});
