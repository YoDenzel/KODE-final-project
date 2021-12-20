import { styled } from '@shared/ui/theme';
import { Typography } from '../../atoms';
import { CashbackText, MoneyChips, MoneySumInput } from '../../molecules';

const Wrapper = styled.View`
  height: ${({ theme }) => theme.spacing(20)}px;
  background-color: ${({ theme }) => theme.palette.background.secondary};
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.tertiary};
  margin-left: ${({ theme }) => theme.spacing(2.4)}px;
`;

interface TMoneySumBlock {
  title: string;
  inputMoney: number;
  setInputMoney: (v1: number) => void;
  moneyArr: number[];
  clicked: boolean;
  setClicked: (v: boolean) => void;
  CASHBACK_SUM?: string | 0;
  CASHBACK_PERCENT?: number;
}

export const MoneySumBlock = ({
  title,
  inputMoney,
  moneyArr,
  setInputMoney,
  clicked,
  setClicked,
  CASHBACK_SUM,
  CASHBACK_PERCENT,
}: TMoneySumBlock) => {
  return (
    <Wrapper>
      <Title variant="body15Semibold">{title}</Title>
      <MoneySumInput
        clicked={clicked}
        setClicked={setClicked}
        inputMoney={inputMoney}
        setInputMoney={setInputMoney}
      />
      {0 === inputMoney ? (
        <MoneyChips moneyArr={moneyArr} setInputMoney={setInputMoney} />
      ) : (
        <CashbackText
          CASHBACK_PERCENT={CASHBACK_PERCENT}
          CASHBACK_SUM={CASHBACK_SUM}
        />
      )}
    </Wrapper>
  );
};
