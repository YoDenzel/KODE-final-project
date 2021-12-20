import { ComponentProps } from 'react';
import { AcceptedDeclinedText, SubmitButton } from '../../molecules';
import { AcceptedDeclinedTemplate } from '../../templates';

interface TAcceptedDeclinedPage {
  submitButton: ComponentProps<typeof SubmitButton>;
  acceptedDeclinedText: ComponentProps<typeof AcceptedDeclinedText>;
}

export const AcceptedDeclinedPage = ({
  submitButton,
  acceptedDeclinedText,
}: TAcceptedDeclinedPage) => {
  return (
    <AcceptedDeclinedTemplate
      submitButton={<SubmitButton {...submitButton} />}
      acceptedDeclinedText={<AcceptedDeclinedText {...acceptedDeclinedText} />}
    />
  );
};
