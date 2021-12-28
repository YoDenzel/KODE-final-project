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
  isOtp: string;
  loading?: boolean;
  input: string;
}

export const CustomKeyboard = ({
  keyboardItems,
  phoneInputClicked,
  isOtp,
  loading,
  input,
}: TCustomKeyboard) => {
  return phoneInputClicked ? (
    <Wrapper>
      {!loading
        ? keyboardItems.map((item, index) => {
            return (
              <CustomKeyboardSingleNumber
                key={index + 1}
                number={item}
                isOtp={isOtp}
                input={input}
              />
            );
          })
        : null}
    </Wrapper>
  ) : null;
};
