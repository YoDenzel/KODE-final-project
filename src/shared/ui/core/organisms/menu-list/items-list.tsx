import { TCategories } from 'models';
import { FlatList } from 'react-native';
import { MenuItem } from '../../molecules';

interface TListProps {
  services: TCategories[];
  navigation?: {
    navigate: (v1: string, v2: object) => void;
  };
  url: string;
}

export const ItemsList = ({ services, navigation, url }: TListProps) => {
  return (
    <>
      <FlatList
        data={services}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <MenuItem
              icon={item.icon}
              name={item.name}
              navigation={navigation}
              url={url}
              item={item}
            />
          );
        }}
      />
    </>
  );
};
