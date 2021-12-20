import { storiesOf } from '@storybook/react-native';
import { CreditCard } from './credit-card-block';

storiesOf('ui/molecules', module).add('credit-card', () => {
  return (
    <CreditCard
      title="Карта для оплаты"
      CardFor="Карта зарплатная"
      AmountOfMoney="457 334,00₽"
    />
  );
});
