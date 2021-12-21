import { styled } from '@shared/ui/theme';
import { TouchableOpacity } from 'react-native';
import { ClearPhoneInput } from '../../atoms/icons/clear-phone-number/clear-phone-number';

const Wrapper = styled(TouchableOpacity)`
  position: absolute;
  top: ${({ theme }) => theme.spacing(3.75)}px;
  left: ${({ theme }) => theme.spacing(2.5)}px;
`;

interface TCancelAuth {
  quit: Function;
}

export const CancelAuth = () => {
  return (
    <Wrapper>
      <ClearPhoneInput />
    </Wrapper>
  );
};
