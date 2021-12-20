import { TouchableOpacity } from 'react-native';
import { Icons } from '../../atoms';
import { styled } from '@shared/ui/theme';

const Wrapper = styled(TouchableOpacity)`
  position: absolute;
  left: ${({ theme }) => theme.spacing(2.4)}px;
`;

interface TGoBack {
  navigation: {
    navigate: (v1: string, v2: object) => void;
    goBack: () => void;
  };
}

export const GoBack = ({ navigation }: TGoBack) => {
  return (
    <Wrapper
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icons.ArrowGoBack />
    </Wrapper>
  );
};
