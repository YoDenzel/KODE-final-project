import { styled } from '@shared/ui/theme';
import { FlatList } from 'react-native';
import { ConfirmationInfo } from '../../molecules';

const List = styled(FlatList)`
  margin-top: 15px;
` as unknown as typeof FlatList;

interface TConfirmationList {
  list: {
    title: string;
    info: string;
  }[];
}

export const ConfirmationList = ({ list }: TConfirmationList) => {
  return (
    <List
      data={list}
      keyExtractor={item => item.title}
      renderItem={({ item }) => {
        return <ConfirmationInfo title={item.title} info={item.info} />;
      }}
    />
  );
};
