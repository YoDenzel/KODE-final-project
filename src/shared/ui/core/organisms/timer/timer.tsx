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
  sendRequestAgain: Function;
}

export const Timer = ({
  title,
  minutes,
  seconds,
  sendRequestAgain,
}: TTimer) => {
  return (
    <Wrapper>
      {minutes === 0 && seconds === 0 ? (
        <ResendOtpButton title={title} sendRequestAgain={sendRequestAgain} />
      ) : (
        <Title variant="caption1">{`Повторить через ${minutes} : ${
          seconds < 10 ? '0' + seconds : seconds
        }`}</Title>
      )}
    </Wrapper>
  );
};
