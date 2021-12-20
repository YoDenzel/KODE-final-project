import { styled } from '@shared/ui/theme';
import { storiesOf } from '@storybook/react-native';
import { AcceptedDeclinedText } from './accepted-declined-text';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
`;
storiesOf('ui/molecules', module).add('accepted-declined-text', () => {
  return (
    <Wrapper>
      <AcceptedDeclinedText
        success={true}
        isLoading={false}
        title="Оплачено"
        info="1 500 "
      />
    </Wrapper>
  );
});
