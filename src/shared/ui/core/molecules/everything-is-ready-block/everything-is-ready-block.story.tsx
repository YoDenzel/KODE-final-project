import { styled } from '@shared/ui/theme';
import { storiesOf } from '@storybook/react-native';
import { EverythingReadyBlock } from './everything-is-ready-block';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

storiesOf('ui/molecules', module).add('everything-is-ready', () => {
  return (
    <Wrapper>
      <EverythingReadyBlock
        title="Все готово"
        info="Теперь вы можете использовать мобильное приложение Kode Bank"
      />
    </Wrapper>
  );
});
