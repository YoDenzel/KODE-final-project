import { styled } from '@shared/ui/theme';
import { Typography } from '../../atoms';

const Wrapper = styled.View`
  margin-left: ${({ theme }) => theme.spacing(2) + 4}px;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

interface TCashbackText {
  CASHBACK_PERCENT?: number;
  CASHBACK_SUM?: string | 0;
}

export const CashbackText = ({
  CASHBACK_SUM,
  CASHBACK_PERCENT,
}: TCashbackText) => {
  return (
    <Wrapper>
      <Title variant="caption1">{`Ваш кешбек составит ${CASHBACK_PERCENT}%  -  ${CASHBACK_SUM} ₽`}</Title>
    </Wrapper>
  );
};
