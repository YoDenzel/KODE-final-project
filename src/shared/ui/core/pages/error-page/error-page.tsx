import { ComponentProps } from 'react';
import {
  CancelAuth,
  EverythingReadyBlock,
  SubmitButton,
} from '../../molecules';
import { EverythingGoodTemplate } from '../../templates';

interface TErrorPage {
  errorBlock: ComponentProps<typeof EverythingReadyBlock>;
  submitButton: ComponentProps<typeof SubmitButton>;
  cancelButton: ComponentProps<typeof CancelAuth>;
}

export const ErrorPage = ({
  errorBlock,
  submitButton,
  cancelButton,
}: TErrorPage) => {
  return (
    <EverythingGoodTemplate
      everythingReadyBlock={<EverythingReadyBlock {...errorBlock} />}
      submitButton={<SubmitButton {...submitButton} />}
      cancelButton={<CancelAuth {...cancelButton} />}
    />
  );
};
