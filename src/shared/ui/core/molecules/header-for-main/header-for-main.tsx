import { styled } from '@shared/ui/theme';
import { Typography } from '../../atoms';

const Wrapper = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.spacing(15)}px;
  background-color: ${({ theme }) => theme.palette.background.primary};
  justify-content: flex-end;
  align-items: flex-start;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
  margin-left: ${({ theme }) => theme.spacing(2)}px;
`;

interface TMainHeader {
  title: string;
}

export const MainHeader = ({ title }: TMainHeader) => {
  return (
    <Wrapper>
      <Title variant="largeTitle">{title}</Title>
    </Wrapper>
  );
};
