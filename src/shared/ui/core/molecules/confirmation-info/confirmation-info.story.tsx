import { styled } from '@shared/ui/theme';
import { storiesOf } from '@storybook/react-native';
import { ConfirmationInfo } from '.';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

storiesOf('ui/molecules', module).add('confrimation-info', () => {
  return (
    <Wrapper>
      <ConfirmationInfo title="Карта для оплаты" info="Карта зарплатная" />
    </Wrapper>
  );
});
