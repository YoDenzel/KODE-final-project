import { styled } from '@shared/ui/theme';
import { Typography } from '../../atoms';
import { ResendOtpButton } from '../../molecules';

const Wrapper = styled.View`
  justify-content: center;
  align-content: center;
  align-self: center;
  width: 55%;
`;

const Title = styled(Typography)`
  text-align: center;
`;

interface TTimer {
  title: string;
  seconds: number;
  minutes: number;
  sendRequestAgaing: Function;
}

export const Timer = ({
  title,
  minutes,
  seconds,
  sendRequestAgaing,
}: TTimer) => {
  return (
    <Wrapper>
      {minutes === 0 && seconds === 0 ? (
        <ResendOtpButton title={title} sendRequestAgain={sendRequestAgaing} />
      ) : (
        <Title variant="caption1">{`Повторить через ${minutes} : ${
          seconds < 10 ? '0' + seconds : seconds
        }`}</Title>
      )}
    </Wrapper>
  );
};
