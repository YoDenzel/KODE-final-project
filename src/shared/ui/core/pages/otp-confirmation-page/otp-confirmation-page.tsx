import { ComponentProps } from 'react';
import { CustomKeyboard, OtpBlock } from '../../organisms';
import { OtpConfirmationTemplate } from '../../templates';

type TOtpConfirmationPage = {
  customKeyboard: ComponentProps<typeof CustomKeyboard>;
  otpInput: ComponentProps<typeof OtpBlock>;
};

export const OtpConfirmationPage = ({
  customKeyboard,
  otpInput,
}: TOtpConfirmationPage) => {
  return (
    <OtpConfirmationTemplate
      customKeyboard={<CustomKeyboard {...customKeyboard} />}
      otpInput={<OtpBlock {...otpInput} />}
    />
  );
};
