import { styled } from '@shared/ui/theme';
import { DeleteLastSymbol } from '../../molecules';
import { CustomKeyboardSingleNumber } from '../../molecules/custom-keyboard-single-number/custom-keyboard-single-number';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CustomKeyboard = () => {
  const arr = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'Отмена',
    '0',
    <DeleteLastSymbol />,
  ];
  return (
    <Wrapper>
      {arr.map(item => {
        return <CustomKeyboardSingleNumber number={item} />;
      })}
    </Wrapper>
  );
};
