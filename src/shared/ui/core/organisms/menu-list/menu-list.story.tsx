import { storiesOf } from '@storybook/react-native';
import { styled } from '@shared/ui/theme';
import { ItemsList } from './items-list';

const Wrapper = styled.View`
  height: 300px;
  background-color: ${({ theme }) => theme.palette.background.secondary};
`;

const data = [
  {
    category_id: '1',
    category_name: 'Мобильная связь',
    category_icon:
      'https://github.com/kode-frontend/files/raw/main/1_mobile.png',
    services: [],
  },
  {
    category_id: '2',
    category_name: 'ЖКХ',
    category_icon: 'https://github.com/kode-frontend/files/raw/main/1_JKH.png',
    services: [],
  },
  {
    category_id: '3',
    category_name: 'Интернет',
    category_icon:
      'https://github.com/kode-frontend/files/raw/main/1_Internet.png',
    services: [],
  },
];

storiesOf('ui/organisms', module).add('menu-list', () => {
  const items = data.map(item => ({
    id: item.category_id,
    name: item.category_name,
    icon: item.category_icon,
    services: item.services,
  }));
  return (
    <Wrapper>
      <ItemsList
        url="salary"
        services={items}
        navigation={{ navigate: () => {} }}
      />
    </Wrapper>
  );
});
