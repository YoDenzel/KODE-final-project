import { storiesOf } from '@storybook/react-native';
import { HeaderForServices } from './header-for-services';

storiesOf('ui/organisms', module).add('header-for-services', () => {
  return (
    <HeaderForServices
      title="Мобильная связь"
      searchPhrase=""
      setSearchPhrase={() => null}
      clicked={false}
      setClicked={() => null}
      navigation={{ navigate: () => {}, goBack: () => {} }}
    />
  );
});
