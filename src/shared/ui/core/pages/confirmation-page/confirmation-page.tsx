import { ComponentProps } from 'react';
import {
  ConfirmationCondition,
  HeaderForMoneyTransfer,
  SubmitButton,
} from '../../molecules';
import { ConfirmationList } from '../../organisms';
import { ConfirmationTemplate } from '../../templates';

interface TConfirmationPage {
  confirmationList: ComponentProps<typeof ConfirmationList>;
  header: ComponentProps<typeof HeaderForMoneyTransfer>;
  submitButton: ComponentProps<typeof SubmitButton>;
  confirmationCondition: ComponentProps<typeof ConfirmationCondition>;
}

export const ConfirmationPage = ({
  confirmationCondition,
  header,
  submitButton,
  confirmationList,
}: TConfirmationPage) => {
  return (
    <ConfirmationTemplate
      submitButton={<SubmitButton {...submitButton} />}
      header={<HeaderForMoneyTransfer {...header} />}
      confirmationList={<ConfirmationList {...confirmationList} />}
      confirmationCondition={
        <ConfirmationCondition {...confirmationCondition} />
      }
    />
  );
};
