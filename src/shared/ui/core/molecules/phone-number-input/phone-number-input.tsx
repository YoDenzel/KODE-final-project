import { useState } from 'react';
import { ActivityIndicator,  TouchableOpacity } from 'react-native';
import { Icons, Typography } from '../../atoms';
import { styled } from '@shared/ui/theme';

export const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  height: 70px;
`;

const Container = styled.View<{ isPageAuth: boolean }>`
  margin-top: ${({ isPageAuth }) => (isPageAuth ? 0 : 20)}px;
  margin-bottom: ${({ isPageAuth }) => (isPageAuth ? 40 : 20)}px;
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

const TelephoneImg = styled.View`
  margin-left: ${({ theme }) => theme.spacing(2)}px;
`;

export const Input = styled.TextInput<{ hasSnacks: boolean | undefined }>`
  width: 100%;
  color: ${({ hasSnacks, theme }) =>
    !hasSnacks ? '#fff' : theme.palette.indicator.error};
  font-size: ${({ theme }) => theme.spacing(2) - 1}px;
  margin-left: ${({ theme }) => theme.spacing(3)}px;
  height: ${({ theme }) => theme.spacing(4)}px;
  font-family: SF_PRO_REGULAR_400;
`;

const CountryCode = styled(Typography)<{ hasSnacks: boolean | undefined }>`
  position: absolute;
  margin-left: ${({ theme }) => theme.spacing(7)}px;
  color: ${({ hasSnacks, theme }) =>
    !hasSnacks ? '#fff' : theme.palette.indicator.error};
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
  isPageAuth: boolean;
  setPhoneInputClicked: (v1: boolean) => void;
  phoneInputClicked: boolean;
  hasSnacks?: boolean;
  isLoading?: boolean;
}

export const PhoneNumberInput: React.FC<TProps> = ({
  items_icon,
  input,
  setInput,
  placeholderText,
  isPageAuth,
  setPhoneInputClicked,
  hasSnacks,
  isLoading,
}) => {
  const [placeholder, setPlaceholder] = useState(placeholderText);

  return (
    <Container isPageAuth={isPageAuth}>
      <Wrapper>
        <PhoneInputContainer>
          {!isPageAuth ? (
            <CompanyImg source={{ uri: items_icon }} />
          ) : (
            <TelephoneImg>
              <Icons.Telephone />
            </TelephoneImg>
          )}
          {placeholder === '' && (
            <CountryCode variant="body15Regular" hasSnacks={hasSnacks}>
              +7
            </CountryCode>
          )}
          <Input
            hasSnacks={hasSnacks}
            onPressIn={() => setPhoneInputClicked(true)}
            placeholder={placeholder}
            placeholderTextColor="#706D76"
            selectionColor="#6C78E6"
            value={input}
            onChangeText={setInput}
            onFocus={() => {
              setPlaceholder('');
              setPhoneInputClicked(true);
            }}
            keyboardType="numeric"
            showSoftInputOnFocus={isPageAuth ? false : true}
          />
        </PhoneInputContainer>
        {!isPageAuth ? (
          <IconBlock onPress={() => setInput('')}>
            <Icons.ClearPhoneInput />
          </IconBlock>
        ) : (
          <IconBlock>
            {isLoading ? <ActivityIndicator color={'#6C78E6'} /> : null}
          </IconBlock>
        )}
      </Wrapper>
    </Container>
  );
};
