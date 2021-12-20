import { styled } from '@shared/ui/theme';
import { deleteLastChar } from '../../../../../models';
import { TouchableOpacity } from 'react-native';
import { Icons } from '../../atoms';

const Wrapper = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`;

export const DeleteLastSymbol = () => {
  return (
    <Wrapper
      onPress={() => {
        deleteLastChar('');
      }}
    >
      <Icons.Backspace />
    </Wrapper>
  );
};
