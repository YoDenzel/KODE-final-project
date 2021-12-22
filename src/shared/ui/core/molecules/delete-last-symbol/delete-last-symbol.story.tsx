import { styled } from '@shared/ui/theme';
import { storiesOf } from '@storybook/react-native';
import { DeleteLastSymbol } from './delete-last-symbol';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

storiesOf('ui/molecules', module).add('delete-last-symbol', () => {
  return (
    <Wrapper>
      <DeleteLastSymbol
        route={{
          name: 'yo',
        }}
      />
    </Wrapper>
  );
});
