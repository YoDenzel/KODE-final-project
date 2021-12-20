import { styled } from '@shared/ui/theme';
import { setInputOtp, setInputPhone } from '../../../../../models';
import { TouchableOpacity } from 'react-native';
import { Typography } from '../../atoms';

const Wrapper = styled(TouchableOpacity)`
  flex: 33%;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2.5)}px 0;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

interface TCustomKeyboardSingleNumber {
  number: string | JSX.Element;
  isOtp: boolean;
}

export const CustomKeyboardSingleNumber = ({
  number,
  isOtp,
}: TCustomKeyboardSingleNumber) => {
  return (
    <Wrapper
      onPress={() => {
        if (isOtp) {
          typeof number === 'string' ? setInputOtp(number) : null;
        } else {
          typeof number === 'string' ? setInputPhone(number) : null;
        }
      }}
    >
      {typeof number === 'string' ? (
        <Title variant="title">{String(number)}</Title>
      ) : (
        number
      )}
    </Wrapper>
  );
};
