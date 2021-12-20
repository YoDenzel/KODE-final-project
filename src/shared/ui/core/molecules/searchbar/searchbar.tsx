import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Icons } from '@shared/ui/core/atoms';
import { styled } from '@shared/ui/theme';

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 95%;
`;

const SearchBarContainer = styled.View`
  padding: 8px;
  flex-direction: row;
  width: 95%;
  background-color: #403a47;
  border-radius: 7px;
  align-items: center;
`;

const Input = styled.TextInput`
  color: #ffffff;
  font-size: 15px;
  margin-left: 10px;
  width: 90%;
  height: 26px;
  font-family: SF_PRO_REGULAR_400;
  line-height: 20px;
  letter-spacing: -0.24px;
`;

const ClearInput = styled(TouchableOpacity)`
  position: absolute;
  right: ${({ theme }) => theme.spacing(1)}px;
`;

export type TSearchBar = {
  searchPhrase: string;
  setSearchPhrase: (val: string) => void;
  clicked: boolean;
  setClicked: (val: boolean) => void;
  navigation: {
    navigate: (v1: string, v2: object) => void;
    goBack: () => void;
  };
};

export const SearchBar: React.FC<TSearchBar> = ({
  searchPhrase,
  setSearchPhrase,
  setClicked,
  clicked,
  navigation,
}) => {
  return (
    <Wrapper>
      <SearchBarContainer>
        {!clicked ? (
          <Feather name="search" size={20} color="#706D76" />
        ) : (
          <TouchableOpacity onPress={navigation.goBack}>
            <Icons.ArrowGoBack />
          </TouchableOpacity>
        )}
        <Input
          placeholder="Поиск"
          placeholderTextColor="#706D76"
          value={searchPhrase}
          selectionColor="#6C78E6"
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {clicked && (
          <ClearInput
            onPress={() => {
              setSearchPhrase('');
            }}
          >
            <Icons.ClearSearchbar />
          </ClearInput>
        )}
      </SearchBarContainer>
    </Wrapper>
  );
};
