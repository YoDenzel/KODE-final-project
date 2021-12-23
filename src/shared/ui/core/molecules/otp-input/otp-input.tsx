import { TextInput } from 'react-native';
import { styled } from '@shared/ui/theme';
import { Typography } from '../../atoms';

const OtpContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const Wrapper = styled.View`
  height: ${({ theme }) => theme.spacing(6)}px;
  width: ${({ theme }) => theme.spacing(5)}px;
  margin-right: ${({ theme }) => theme.spacing(1) + 2}px;
  background-color: ${({ theme }) => theme.palette.content.secondary};
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.spacing(1.5)}px;
`;

const Title = styled(Typography)`
  text-align: center;
`;

const Border = styled.View`
  border-bottom-color: ${({ theme }) => theme.palette.accent.primary};
  border-bottom-width: 2px;
  border-radius: ${({ theme }) => theme.spacing(2)}px;
  width: 60%;
`;
const Dash = styled(Typography)`
  align-self: center;
  padding-right: ${({ theme }) => theme.spacing(1.25)}px;
`;

interface TOtpInput {
  otp: string;
}

export const OtpInput = ({ otp }: TOtpInput) => {
  let randomInt = Math.random();

  return (
    <>
      <OtpContainer>
        {[0, 1, 2, 3].map((item, index) => (
          <>
            <Wrapper key={randomInt}>
              <Title>{otp[item]}</Title>
              {index === otp.length ? <Border /> : null}
            </Wrapper>
            {index === 1 ? <Dash variant="subtitle">-</Dash> : null}
          </>
        ))}
      </OtpContainer>
    </>
  );
};
