import { styled } from '@shared/ui/theme';
import { CustomKeyboardSingleNumber } from '../../molecules';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing(3)}px;
`;

type TItem = string | JSX.Element;

interface TCustomKeyboard {
  keyboardItems: Array<TItem>;
  phoneInputClicked: boolean;
  randomKey: Function;
  isOtp: boolean;
}

export const CustomKeyboard = ({
  keyboardItems,
  phoneInputClicked,
  randomKey,
  isOtp,
}: TCustomKeyboard) => {
  return phoneInputClicked ? (
    <Wrapper>
      {keyboardItems.map(item => {
        return (
          <CustomKeyboardSingleNumber
            key={randomKey()}
            number={item}
            isOtp={isOtp}
          />
        );
      })}
    </Wrapper>
  ) : null;
};
