import { ComponentProps } from 'react';
import {
  SubmitButton,
  KodeLogoMolecule,
  MappedSnackBar,
  PasswordInput,
  CancelAuth,
} from '../../molecules';
import { PhoneAuthTemplate } from '../../templates';

interface TPhoneAuthPage {
  submitButton: ComponentProps<typeof SubmitButton>;
  passwordInput: ComponentProps<typeof PasswordInput>;
  kodeLogo: ComponentProps<typeof KodeLogoMolecule>;
  snackBar: ComponentProps<typeof MappedSnackBar>;
  cancelAuth: ComponentProps<typeof CancelAuth>;
}

export const PasswordPage = ({
  submitButton,
  passwordInput,
  kodeLogo,
  snackBar,
  cancelAuth,
}: TPhoneAuthPage) => {
  return (
    <PhoneAuthTemplate
      cancelAuth={<CancelAuth />}
      snackBar={<MappedSnackBar {...snackBar} />}
      kodeLogo={<KodeLogoMolecule />}
      phoneInput={<PasswordInput {...passwordInput} />}
      submitButtton={<SubmitButton {...submitButton} />}
    />
  );
};
