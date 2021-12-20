import { TouchableOpacity } from 'react-native';
import { styled } from '@shared/ui/theme';
import { Typography } from '../../atoms';
import { TCategories } from '../../../../../models';

const IMAGE_SIZE = 100;

const ImageBlock = styled.View<{ url: string }>`
  width: ${() => IMAGE_SIZE / 2}px;
  height: ${() => IMAGE_SIZE / 2}px;
  border-radius: ${() => IMAGE_SIZE / 2}px;
  background-color: ${({ theme, url }) =>
    url === 'salary'
      ? theme.palette.background.secondary
      : theme.palette.background.primary};
  justify-content: center;
  margin-left: ${({ theme }) => theme.spacing(2)}px;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`;

export const StyledImage = styled.Image`
  width: ${() => IMAGE_SIZE / 2.5}px;
  height: ${() => IMAGE_SIZE / 2.5}px;
  align-self: center;
`;

export const Wrapper = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.background.secondary};
`;

export const ViewStyle = styled.View`
  border-bottom-color: ${({ theme }) => theme.palette.content.secondary};
  border-bottom-width: 1px;
  border-radius: 0.5px;
  margin: 15px 20px 10px 80px;
`;

export const Title = styled(Typography)`
  margin-left: ${({ theme }) => theme.spacing(2)}px;
  flex: 1;
`;

interface TItem {
  icon: string;
  name: string;
  navigation?: {
    navigate: (v1: string, v2: object) => void;
  };
  url: string;
  item: TCategories;
}

export const MenuItem = ({ icon, name, navigation, url, item }: TItem) => {
  return (
    <>
      <Wrapper
        onPress={() => {
          navigation?.navigate(url, {
            data: url === 'services' ? item.id : item,
          });
        }}
        activeOpacity={0.7}
      >
        <ImageBlock url={url}>
          <StyledImage source={{ uri: icon }} />
        </ImageBlock>
        <Title variant="body15Regular">{name}</Title>
      </Wrapper>
      <ViewStyle />
    </>
  );
};
