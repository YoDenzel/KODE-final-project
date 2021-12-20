import { ComponentProps } from 'react';
import {
  KodeLogoMolecule,
  PhoneNumberInput,
  SubmitButton,
} from '../../molecules';
import { PhoneAuthTemplate } from '../../templates';

interface TPhoneAuthPage {
  submitButton: ComponentProps<typeof SubmitButton>;
  phoneInput: ComponentProps<typeof PhoneNumberInput>;
  kodeLogo: ComponentProps<typeof KodeLogoMolecule>;
}

export const PhoneAuthPage = ({
  submitButton,
  phoneInput,
  kodeLogo,
}: TPhoneAuthPage) => {
  return (
    <PhoneAuthTemplate
      submitButtton={<SubmitButton {...submitButton} />}
      kodeLogo={<KodeLogoMolecule />}
      phoneInput={<PhoneNumberInput {...phoneInput} />}
    />
  );
};
