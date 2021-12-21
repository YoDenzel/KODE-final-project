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
  loading?: boolean;
}

export const CustomKeyboard = ({
  keyboardItems,
  phoneInputClicked,
  randomKey,
  isOtp,
  loading,
}: TCustomKeyboard) => {
  return phoneInputClicked ? (
    <Wrapper>
      {!loading
        ? keyboardItems.map(item => {
            return (
              <CustomKeyboardSingleNumber
                key={randomKey()}
                number={item}
                isOtp={isOtp}
              />
            );
          })
        : null}
    </Wrapper>
  ) : null;
};
