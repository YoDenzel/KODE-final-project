import { TouchableOpacity } from 'react-native';
import { styled } from '@shared/ui/theme';
import { Typography } from '../../atoms';

const Wrapper = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`;

const Title = styled(Typography)`
  text-align: center;
`;

interface TResendOtpButton {
  title: string;
  sendRequestAgain: Function;
}

export const ResendOtpButton = ({
  title,
  sendRequestAgain,
}: TResendOtpButton) => {
  return (
    <Wrapper onPress={() => sendRequestAgain()}>
      <Title variant="caption1">{title}</Title>
    </Wrapper>
  );
};
