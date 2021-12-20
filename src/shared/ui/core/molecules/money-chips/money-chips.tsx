import { FlatList, TouchableOpacity, View } from 'react-native';
import { Typography } from '../../atoms';
import { styled } from '@shared/ui/theme';

const Wrapper = styled.View`
  margin-bottom: 20px;
`;

const ItemContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing(8)}px;
  height: ${({ theme }) => theme.spacing(3.5)}px;
  border-radius: ${({ theme }) => theme.spacing(4)}px;
  background-color: ${({ theme }) => theme.palette.content.secondary};
  margin: 20px 0 0 18px;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

interface TMoneyChips {
  moneyArr: number[];
  setInputMoney: (v1: number) => void;
}

export const MoneyChips = ({ moneyArr, setInputMoney }: TMoneyChips) => {
  return (
    <Wrapper>
      <FlatList
        data={moneyArr}
        keyExtractor={item => item.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => setInputMoney(item)}
              activeOpacity={0.7}
            >
              <ItemContainer>
                <Title variant="body15Regular">{item + '₽'}</Title>
              </ItemContainer>
            </TouchableOpacity>
          </View>
        )}
      />
    </Wrapper>
  );
};
