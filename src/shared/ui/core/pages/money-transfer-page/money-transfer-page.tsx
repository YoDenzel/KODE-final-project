import { ComponentProps } from 'react';
import {
  CreditCard,
  HeaderForMoneyTransfer,
  PhoneNumberInput,
  SubmitButton,
  MappedSnackBar,
} from '../../molecules';
import { MoneySumBlock } from '../../organisms';
import { MoneyTransferTemplate } from '../../templates';

type TMoneyTransferPage = {
  submitButton: ComponentProps<typeof SubmitButton>;
  moneySum: ComponentProps<typeof MoneySumBlock>;
  header: ComponentProps<typeof HeaderForMoneyTransfer>;
  phoneNumber: ComponentProps<typeof PhoneNumberInput>;
  creditCard: ComponentProps<typeof CreditCard>;
  snackBar: ComponentProps<typeof MappedSnackBar>;
  navigation: {};
};

export const MoneyTransferPage = ({
  submitButton,
  moneySum,
  header,
  phoneNumber,
  creditCard,
  navigation,
  snackBar,
}: TMoneyTransferPage) => {
  return (
    <MoneyTransferTemplate
      submitButton={<SubmitButton {...submitButton} />}
      moneySum={<MoneySumBlock {...moneySum} />}
      header={<HeaderForMoneyTransfer {...header} {...navigation} />}
      phoneNumber={<PhoneNumberInput {...phoneNumber} />}
      creditCard={<CreditCard {...creditCard} />}
      snackBar={<MappedSnackBar {...snackBar} />}
    />
  );
};
