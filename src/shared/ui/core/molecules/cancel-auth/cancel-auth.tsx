import { TouchableOpacity } from 'react-native';
import { styled } from '@shared/ui/theme';
import { ClearPhoneInput } from '../../atoms/icons/clear-phone-number/clear-phone-number';

const Wrapper = styled(TouchableOpacity)`
  position: absolute;
  top: ${({ theme }) => theme.spacing(5)}px;
  left: ${({ theme }) => theme.spacing(2.5)}px;
`;

interface TCancelAuth {
  quit: Function;
}

export const CancelAuth = ({ quit }: TCancelAuth) => {
  return (
    <Wrapper onPress={() => quit()}>
      <ClearPhoneInput color="#fff" />
    </Wrapper>
  );
};
