import { styled } from '@shared/ui/theme';
import { deleteLastCharOtp, deleteLastCharPhone } from '../../../../../models';
import { TouchableOpacity } from 'react-native';
import { Icons } from '../../atoms';

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
