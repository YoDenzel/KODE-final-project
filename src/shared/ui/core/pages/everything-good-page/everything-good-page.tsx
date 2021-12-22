import { ComponentProps } from 'react';
import { EverythingReadyBlock, SubmitButton } from '../../molecules';
import { EverythingGoodTemplate } from '../../templates';

interface TEverythingGoodPage {
  submitButton: ComponentProps<typeof SubmitButton>;
  everythingReadyBlock: ComponentProps<typeof EverythingReadyBlock>;
}

export const EverythingGoodPage = ({
  submitButton,
  everythingReadyBlock,
}: TEverythingGoodPage) => {
  return (
    <EverythingGoodTemplate
      submitButton={<SubmitButton {...submitButton} />}
      everythingReadyBlock={<EverythingReadyBlock {...everythingReadyBlock} />}
    />
  );
};
