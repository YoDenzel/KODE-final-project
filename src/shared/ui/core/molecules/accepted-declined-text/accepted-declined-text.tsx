import { ActivityIndicator } from 'react-native';
import { styled } from '@shared/ui/theme';
import { useTheme } from 'styled-components';
import { Icons, Typography } from '../../atoms';

const Wrapper = styled.View`
  margin: 0 20px;
  padding-bottom: 40px;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.tertiary};
  margin-top: 16px;
`;

const Info = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

interface TAcceptedDeclinedText {
  title: string;
  info: string;
  success: boolean;
  isLoading: boolean;
}

const CenterPage = styled.View`
  justify-content: center;
  align-items: center;
`;

export const AcceptedDeclinedText = ({
  title,
  info,
  success,
  isLoading,
}: TAcceptedDeclinedText) => {
  const theme = useTheme();

  if (isLoading) {
    return (
      <CenterPage>
        <ActivityIndicator color={theme.palette.accent.tertiary} size="large" />
      </CenterPage>
    );
  }

  return (
    <Wrapper>
      {success ? <Icons.PostRequestAccepted /> : <Icons.PostRequestDeclined />}
      <Title variant="body17Regular">{title}</Title>
      <Info variant="largeTitle">{info}</Info>
    </Wrapper>
  );
};
