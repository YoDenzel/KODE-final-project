import { styled } from '@shared/ui/theme';
import { Icons } from '../../atoms';

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

export const KodeLogoMolecule = () => {
  return (
    <Wrapper>
      <Icons.KodeLogo />
    </Wrapper>
  );
};
