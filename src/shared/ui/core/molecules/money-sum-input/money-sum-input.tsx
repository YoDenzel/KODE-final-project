import CurrencyInput from 'react-native-currency-input';
import { styled } from '@shared/ui/theme';

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background.secondary};
`;

const InputConatiner = styled.View`
  width: 90%;
`;

const Input = styled(CurrencyInput)`
  color: #fff;
  font-size: ${({ theme }) => theme.spacing(3.5)}px;
  height: ${({ theme }) => theme.spacing(5)}px;
  font-family: SF_PRO_MEDIUM_500;
`;

const BorderBottom = styled.View<{ clicked: boolean }>`
  border-bottom-width: 1px;
  border-bottom-color: ${props => (props.clicked ? '#6C78E6' : '#FFF')};
  margin: 10px 20px 0 20px;
`;

interface TMoneySumInput {
  inputMoney: number | null;
  setInputMoney?: (v: number) => void;
  clicked: boolean;
  setClicked: (v: boolean) => void;
}

export const MoneySumInput: React.FC<TMoneySumInput> = ({
  inputMoney,
  setInputMoney,
  clicked,
  setClicked,
}) => {
  return (
    <>
      <Wrapper>
        <InputConatiner>
          <Input
            placeholderTextColor="#FFFFFF"
            selectionColor="#6C78E6"
            value={inputMoney}
            onChangeValue={setInputMoney}
            suffix=" ₽"
            precision={0}
            minValue={0}
            delimiter="  "
            onFocus={() => {
              setClicked(true);
            }}
          />
        </InputConatiner>
      </Wrapper>
      <BorderBottom clicked={clicked} />
    </>
  );
};
