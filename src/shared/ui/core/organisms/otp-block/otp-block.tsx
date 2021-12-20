import { styled } from '@shared/ui/theme';
import { Typography } from '../../atoms';
import { OtpInput } from '../../molecules';

const Wrapper = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

const Title = styled(Typography)`
  text-align: center;
  padding-bottom: ${({ theme }) => theme.spacing(3)}px;
  width: 50%;
  align-self: center;
`;

interface TOtpBlock {
  title: string;
}

export const OtpBlock = ({ title }: TOtpBlock) => {
  return (
    <>
      <Wrapper>
        <Title variant="body15Regular">{title}</Title>
        <OtpInput />
      </Wrapper>
    </>
  );
};
