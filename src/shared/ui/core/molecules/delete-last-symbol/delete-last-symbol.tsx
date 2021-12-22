import { TouchableOpacity } from 'react-native';
import { styled } from '@shared/ui/theme';
import { Icons } from '../../atoms';
import { deleteLastCharOtp, deleteLastCharPhone } from '../../../../../models';

const Wrapper = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`;

interface TDeleteLastSymbol {
  route: {
    name: string;
  };
}

export const DeleteLastSymbol = ({ route }: TDeleteLastSymbol) => {
  return (
    <Wrapper
      onPress={() => {
        route.name === 'phoneAuth'
          ? deleteLastCharPhone('')
          : deleteLastCharOtp('');
      }}
    >
      <Icons.Backspace />
    </Wrapper>
  );
};
