import { TouchableOpacity } from 'react-native';
import { styled } from '@shared/ui/theme';
import { Typography } from '../../atoms';

const Wrapper = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

interface THideKeyboardButton {
  title: string;
  setPhoneInputClick: (v1: boolean) => void;
}

export const HideKeyboardButton = ({
  title,
  setPhoneInputClick,
}: THideKeyboardButton) => {
  return (
    <Wrapper
      onPress={() => setPhoneInputClick(false)}
      hitSlop={{ top: 30, bottom: 30, right: 40, left: 40 }}
    >
      <Title variant="caption1">{title}</Title>
    </Wrapper>
  );
};
