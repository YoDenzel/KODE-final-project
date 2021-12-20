import { styled } from '@shared/ui/theme';
import { Typography } from '../../atoms';
import { GoBack } from '../../molecules';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  justify-content: center;
  height: ${({ theme }) => theme.spacing(8)}px;
  align-items: center;
`;

const Block = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

const StatusBarTheme = styled.StatusBar`
  background-color: ${({ theme }) => theme.palette.background.secondary};
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

interface THeaderForMoneyTransfer {
  title: string;
  navigation: {
    navigate: (v1: string, v2: object) => void;
    goBack: () => void;
  };
}

export const HeaderForMoneyTransfer = ({
  navigation,
  title,
}: THeaderForMoneyTransfer) => {
  return (
    <>
      <StatusBarTheme />
      <Wrapper>
        <Block>
          <GoBack navigation={navigation} />
          <Title variant="subtitle">{title}</Title>
        </Block>
      </Wrapper>
    </>
  );
};
