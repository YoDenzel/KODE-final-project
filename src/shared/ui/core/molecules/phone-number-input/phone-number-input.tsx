import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icons, Typography } from '../../atoms';
import { styled } from '@shared/ui/theme';

export const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  height: 70px;
`;

const Container = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const PhoneInputContainer = styled.View`
  padding: ${({ theme }) => theme.spacing(1.2)}px;
  flex-direction: row;
  width: 90%;
  background-color: ${({ theme }) => theme.palette.content.secondary};
  border-radius: ${({ theme }) => theme.spacing(4)}px;
  align-items: center;
`;

const CompanyImg = styled.Image`
  width: ${({ theme }) => theme.spacing(3)}px;
  height: ${({ theme }) => theme.spacing(3)}px;
  margin-left: ${({ theme }) => theme.spacing(2)}px;
`;

export const Input = styled.TextInput`
  width: 100%;
  color: #fff;
  font-size: ${({ theme }) => theme.spacing(2) - 1}px;
  margin-left: ${({ theme }) => theme.spacing(3)}px;
  height: ${({ theme }) => theme.spacing(4)}px;
  font-family: SF_PRO_REGULAR_400;
`;

const CountryCode = styled(Typography)`
  position: absolute;
  margin-left: ${({ theme }) => theme.spacing(7)}px;
`;

const IconBlock = styled(TouchableOpacity)`
  position: absolute;
  right: ${({ theme }) => theme.spacing(4)}px; ;
`;

interface TProps {
  items_icon: string;
  input: string;
  setInput: (v: string) => void;
  placeholderText: string;
}

export const PhoneNumberInput: React.FC<TProps> = ({
  items_icon,
  input,
  setInput,
  placeholderText,
}) => {
  const [placeholder, setPlaceholder] = useState(placeholderText);
  const [clicked, setClicked] = useState(false);

  return (
    <Container>
      <Wrapper>
        <PhoneInputContainer>
          <CompanyImg source={{ uri: items_icon }} />
          {clicked && <CountryCode variant="body15Regular">+7</CountryCode>}
          <Input
            placeholder={placeholder}
            placeholderTextColor="#706D76"
            selectionColor="#6C78E6"
            value={input}
            onChangeText={setInput}
            onFocus={() => {
              setClicked(true);
              setPlaceholder('');
            }}
            keyboardType="numeric"
          />
        </PhoneInputContainer>
        <IconBlock onPress={() => setInput('')}>
          <Icons.ClearPhoneInput />
        </IconBlock>
      </Wrapper>
    </Container>
  );
};
