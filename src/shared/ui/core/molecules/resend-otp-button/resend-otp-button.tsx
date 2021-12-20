import { styled } from '@shared/ui/theme';
import { resetTimer } from '../../../../../models';
import { TouchableOpacity } from 'react-native';
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
}

export const ResendOtpButton = ({ title }: TResendOtpButton) => {
  return (
    <Wrapper onPress={() => resetTimer()}>
      <Title variant="caption1">{title}</Title>
    </Wrapper>
  );
};
