import { styled } from '@shared/ui/theme';
import { Typography } from '../../atoms';

const Wrapper = styled.View`
  flex: 33%;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(3)}px 0;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

interface TCustomKeyboardSingleNumber {
  number: string | JSX.Element;
}

export const CustomKeyboardSingleNumber = ({
  number,
}: TCustomKeyboardSingleNumber) => {
  return (
    <Wrapper>
      {typeof number === 'string' ? (
        <Title variant="title">{String(number)}</Title>
      ) : (
        number
      )}
    </Wrapper>
  );
};
