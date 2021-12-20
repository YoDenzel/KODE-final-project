import { Background } from '@pages/ui';
import { styled } from '@shared/ui/theme';
import { storiesOf } from '@storybook/react-native';
import { MoneySumInput } from './money-sum-input';

const Flex1 = styled.View`
  flex: 1;
`;

storiesOf('ui/molecules', module).add('money-sum-input', () => {
  return (
    <>
      <Flex1 />
      <Background>
        <MoneySumInput inputMoney={0} setInputMoney={() => {}} />
      </Background>
      <Flex1 />
    </>
  );
});
