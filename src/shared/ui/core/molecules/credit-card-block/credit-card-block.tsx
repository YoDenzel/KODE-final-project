import { styled } from '@shared/ui/theme';
import { Icons, Typography } from '../../atoms';

const CardTextBlock = styled.View`
  height: 60px;
  width: 100%;
  margin-right: 20px;
  justify-content: center;
`;

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
`;

const CardText = styled(Typography)`
  padding-left: 20px;
`;

const CardModalBlock = styled.View`
  height: ${({ theme }) => theme.spacing(8)}px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  padding-left: 20px;
`;

const CreditCardInfoBlock = styled.View`
  margin-left: 15px;
`;

const CreditCardInfoText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-left: 15px;
`;

const DropDownBlock = styled.View`
  position: absolute;
  right: 15px;
`;

interface TCreditCard {
  title: string;
  CardFor: string;
  AmountOfMoney: string;
}

export const CreditCard = ({ title, CardFor, AmountOfMoney }: TCreditCard) => {
  return (
    <Wrapper>
      <CardTextBlock>
        <CardText variant="body15Semibold">{title}</CardText>
      </CardTextBlock>
      <CardModalBlock>
        <Icons.CreditCard />
        <CreditCardInfoBlock>
          <CreditCardInfoText>{CardFor}</CreditCardInfoText>
          <CreditCardInfoText>{AmountOfMoney}</CreditCardInfoText>
        </CreditCardInfoBlock>
        <DropDownBlock>
          <Icons.ChevronDown />
        </DropDownBlock>
      </CardModalBlock>
    </Wrapper>
  );
};
