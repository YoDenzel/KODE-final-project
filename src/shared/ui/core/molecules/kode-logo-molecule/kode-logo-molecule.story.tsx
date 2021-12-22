import { storiesOf } from '@storybook/react-native';
import { styled } from '@shared/ui/theme';
import { KodeLogoMolecule } from '.';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.secondary};
`;

storiesOf('ui/molecules', module).add('kode-logo-molecule', () => {
  return (
    <Wrapper>
      <KodeLogoMolecule />
    </Wrapper>
  );
});
