import { storiesOf } from '@storybook/react-native';
import { Background } from '@pages/ui';
import { styled } from '@shared/ui/theme';
import { MoneySumInput } from './money-sum-input';

const Flex1 = styled.View`
  flex: 1;
`;

storiesOf('ui/molecules', module).add('money-sum-input', () => {
  return (
    <>
      <Flex1 />
      <Background>
        <MoneySumInput
          inputMoney={0}
          setInputMoney={() => void 0}
          clicked={false}
          setClicked={() => void 0}
        />
      </Background>
      <Flex1 />
    </>
  );
});
