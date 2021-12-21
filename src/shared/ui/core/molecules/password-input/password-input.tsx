import { useState } from 'react';
import { ActivityIndicator, Keyboard, TouchableOpacity } from 'react-native';
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
  margin-bottom: 40px;
`;

const PhoneInputContainer = styled.View`
  padding: ${({ theme }) => theme.spacing(1.2)}px;
  flex-direction: row;
  width: 90%;
  background-color: ${({ theme }) => theme.palette.content.secondary};
  border-radius: ${({ theme }) => theme.spacing(4)}px;
  align-items: center;
`;

const LockImg = styled.View`
  margin-left: ${({ theme }) => theme.spacing(2)}px;
`;

export const Input = styled.TextInput`
  width: 100%;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.spacing(2) - 1}px;
  margin-left: ${({ theme }) => theme.spacing(3)}px;
  height: ${({ theme }) => theme.spacing(4)}px;
  font-family: SF_PRO_REGULAR_400;
`;

const IconBlock = styled(TouchableOpacity)`
  position: absolute;
  right: ${({ theme }) => theme.spacing(4)}px; ;
`;

interface TProps {
  input: string;
  setInput: (v: string) => void;
  placeholderText: string;
}

export const PasswordInput: React.FC<TProps> = ({
  input,
  setInput,
  placeholderText,
}) => {
  const [placeholder, setPlaceholder] = useState(placeholderText);
  const [clicked, setClicked] = useState<boolean>(true);

  return (
    <Container>
      <Wrapper>
        <PhoneInputContainer>
          <LockImg>
            <Icons.Lock />
          </LockImg>
          <Input
            placeholder={placeholder}
            placeholderTextColor="#706D76"
            selectionColor="#6C78E6"
            value={input}
            onChangeText={setInput}
            onFocus={() => {
              setPlaceholder('');
            }}
            secureTextEntry={clicked ? false : true}
          />
        </PhoneInputContainer>

        <IconBlock onPress={() => setInput('')}>
          {clicked ? <Icons.ShowPassword /> : <Icons.PasswordVisible />}
        </IconBlock>
      </Wrapper>
    </Container>
  );
};
