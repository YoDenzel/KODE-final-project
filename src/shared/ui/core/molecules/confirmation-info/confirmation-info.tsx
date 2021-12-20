import { styled } from '@shared/ui/theme';
import { Icons, Typography } from '../../atoms';

const Wrapper = styled.View`
  height: 72px;

  margin: 0 20px;
  padding-bottom: 40px;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.tertiary};
`;

const Info = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

const BorderUnderline = styled(Icons.Underline)`
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`;

interface TConfirmation {
  title: string;
  info: string;
}

export const ConfirmationInfo = ({ title, info }: TConfirmation) => {
  return (
    <Wrapper>
      <Title variant="caption1">{title}</Title>
      <Info variant="body15Regular">{info}</Info>
      <BorderUnderline />
    </Wrapper>
  );
};
