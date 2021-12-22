import { View } from 'react-native';
import { styled } from '@shared/ui/theme';
import { Typography } from '../../atoms';

const Touch = styled.TouchableOpacity`
  align-items: center;
`;

const LinkText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  text-decoration-line: underline;
  margin: 0 20px;
  text-align: center;
  height: ${({ theme }) => theme.spacing(4)}px;
`;

interface TConfirmationCondition {
  linkText: string;
}

export const ConfirmationCondition = ({ linkText }: TConfirmationCondition) => {
  return (
    <View>
      <Touch activeOpacity={0.7}>
        <LinkText variant="caption2">{linkText}</LinkText>
      </Touch>
    </View>
  );
};
