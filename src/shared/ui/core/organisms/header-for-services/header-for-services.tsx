import { styled } from '@shared/ui/theme';
import { Typography } from '../../atoms';
import { GoBack, SearchBar, TSearchBar } from '../../molecules';

const Wrapper = styled.View<{ clicked: boolean }>`
  background-color: ${({ theme }) => theme.palette.background.primary};
  justify-content: center;
  height: ${({ clicked, theme }) =>
    !clicked ? theme.spacing(16) : theme.spacing(8)}px;
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

interface THeaderForServices extends TSearchBar {
  title: string;
}

export const HeaderForServices = ({
  searchPhrase,
  setClicked,
  setSearchPhrase,
  clicked,
  navigation,
  title,
}: THeaderForServices) => {
  return (
    <>
      <StatusBarTheme />
      <Wrapper clicked={clicked}>
        {!clicked ? (
          <Block>
            <GoBack navigation={navigation} />
            <Title variant="subtitle">{title}</Title>
          </Block>
        ) : null}
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
          navigation={navigation}
        />
      </Wrapper>
    </>
  );
};
