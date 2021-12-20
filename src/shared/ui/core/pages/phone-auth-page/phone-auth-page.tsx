import { ComponentProps } from 'react';
import {
  KodeLogoMolecule,
  MappedSnackBar,
  PhoneNumberInput,
  SubmitButton,
} from '../../molecules';

import { CustomKeyboard } from '../../organisms';
import { PhoneAuthTemplate } from '../../templates';

interface TPhoneAuthPage {
  submitButton: ComponentProps<typeof SubmitButton>;
  phoneInput: ComponentProps<typeof PhoneNumberInput>;
  kodeLogo: ComponentProps<typeof KodeLogoMolecule>;
  customKeyboard: ComponentProps<typeof CustomKeyboard>;
  snackBar: ComponentProps<typeof MappedSnackBar>;
}

export const PhoneAuthPage = ({
  submitButton,
  phoneInput,
  kodeLogo,
  customKeyboard,
  snackBar,
}: TPhoneAuthPage) => {
  return (
    <PhoneAuthTemplate
      submitButtton={<SubmitButton {...submitButton} />}
      kodeLogo={<KodeLogoMolecule />}
      phoneInput={<PhoneNumberInput {...phoneInput} />}
      customKeyboard={<CustomKeyboard {...customKeyboard} />}
      snackBar={<MappedSnackBar {...snackBar} />}
    />
  );
};
