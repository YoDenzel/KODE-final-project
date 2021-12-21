import { styled } from '@shared/ui/theme';
import { TouchableOpacity } from 'react-native';
import { ClearPhoneInput } from '../../atoms/icons/clear-phone-number/clear-phone-number';

const Wrapper = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  left: 5px;
`;

export const CancelAuth = () => {
  return (
    <Wrapper>
      <ClearPhoneInput />
    </Wrapper>
  );
};
