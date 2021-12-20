import { styled } from '@shared/ui/theme';
import { ReactNode } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';

type TMoneyTransferTemplate = {
  submitButton: ReactNode;
  moneySum: ReactNode;
  header: ReactNode;
  phoneNumber: ReactNode;
  creditCard: ReactNode;
  snackBar: ReactNode;
};

const Background = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
`;

export const MoneyTransferTemplate = ({
  submitButton,
  moneySum,
  header,
  phoneNumber,
  creditCard,
  snackBar,
}: TMoneyTransferTemplate) => {
  return (
    <>
      <Background>
        <ScrollView>
          {header}
          {creditCard}
          {phoneNumber}
          <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={-250}
          >
            {moneySum}
            {submitButton}
          </KeyboardAvoidingView>
          {snackBar}
        </ScrollView>
      </Background>
    </>
  );
};
