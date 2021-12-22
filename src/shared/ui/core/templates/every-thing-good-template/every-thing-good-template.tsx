import { styled } from '@shared/ui/theme';
import { ReactNode } from 'react';

const Background = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
`;

const Flex1 = styled.View`
  flex: 1;
`;

interface TEverythingGoodTemplate {
  everythingReadyBlock: ReactNode;
  submitButton: ReactNode;
  cancelButton?: ReactNode;
}

export const EverythingGoodTemplate = ({
  everythingReadyBlock,
  submitButton,
  cancelButton,
}: TEverythingGoodTemplate) => {
  return (
    <Background>
      {cancelButton}
      <Flex1 />
      {everythingReadyBlock}
      <Flex1 />
      {submitButton}
    </Background>
  );
};
