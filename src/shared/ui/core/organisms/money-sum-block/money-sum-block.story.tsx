import { storiesOf } from '@storybook/react-native';
import { MoneySumBlock } from './money-sum-block';

storiesOf('ui/organisms', module).add('money-sum-block', () => {
  return (
    <MoneySumBlock
      title={'Сумма'}
      inputMoney={10}
      moneyArr={[100, 500, 1000, 2500, 5000, 10000, 15000, 20000]}
      setInputMoney={() => void 0}
      CASHBACK_PERCENT={10}
      CASHBACK_SUM={'500'}
      clicked={false}
      setClicked={() => void 0}
    />
  );
});
