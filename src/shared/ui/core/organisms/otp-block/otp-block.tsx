import { ActivityIndicator } from 'react-native';
import { styled } from '@shared/ui/theme';
import { Typography } from '../../atoms';
import { OtpInput } from '../../molecules';

const Wrapper = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing(1.5)}px;
`;

const Title = styled(Typography)`
  text-align: center;
  padding-bottom: ${({ theme }) => theme.spacing(2)}px;
  width: 50%;
  align-self: center;
`;

const Error = styled(Typography)`
  text-align: center;
  padding-right: ${({ theme }) => theme.spacing(1.25)}px;
  color: ${({ theme }) => theme.palette.indicator.error};
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`;

const Loading = styled(ActivityIndicator)`
  justify-content: center;
  align-items: center;
  height: 100%;
`;

interface TOtpBlock {
  title: string;
  otp: string;
  errorText: string;
  loading: boolean;
  amountOfTries: number;
}

export const OtpBlock = ({
  title,
  otp,
  errorText,
  loading,
  amountOfTries,
}: TOtpBlock) => {
  return (
    <>
      <Wrapper>
        {!loading ? (
          <>
            <Title variant="body15Regular">{title}</Title>
            <OtpInput otp={otp} />
            {amountOfTries < 5 ? (
              <Error variant="caption2">{errorText}</Error>
            ) : null}
          </>
        ) : (
          <Loading color={'#fff'} size={'large'} />
        )}
      </Wrapper>
    </>
  );
};
