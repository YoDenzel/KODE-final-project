import { styled } from '@shared/ui/theme';
import { storiesOf } from '@storybook/react-native';
import { CancelAuth } from './cancel-auth';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  justify-content: center;
  align-items: center;
  flex: 1;
`;

storiesOf('ui/molecules', module).add('cancel-auth', () => {
  return (
    <Wrapper>
      <CancelAuth quit={() => void 0} />
    </Wrapper>
  );
});
