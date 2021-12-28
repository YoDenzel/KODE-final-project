import { TouchableOpacity } from 'react-native';
import { styled } from '@shared/ui/theme';
import { Typography } from '../../atoms';
import { setInputOtp, setInputPhone } from '../../../../../models';

const Wrapper = styled(TouchableOpacity)`
  flex: 33%;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)}px 0;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

interface TCustomKeyboardSingleNumber {
  number: string | JSX.Element;
  isOtp: string;
  input: string;
}

export const CustomKeyboardSingleNumber = ({
  number,
  isOtp,
  input,
}: TCustomKeyboardSingleNumber) => {
  return (
    <Wrapper
      onPress={() => {
        if (isOtp === 'otpAuth') {
          typeof number === 'string' ? setInputOtp(number) : null;
        } else {
          typeof number === 'string'
            ? input?.length < 10 && setInputPhone(number)
            : null;
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
