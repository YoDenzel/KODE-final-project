import { storiesOf } from '@storybook/react-native';
import { SearchBar } from './searchbar';

storiesOf('ui/molecules', module).add('searchbar', () => {
  return (
    <SearchBar
      searchPhrase=""
      setSearchPhrase={() => null}
      clicked={false}
      setClicked={() => null}
      navigation={{ navigate: () => {}, goBack: () => {} }}
    />
  );
});
