import { styled } from '@shared/ui/theme';
import { useStore } from 'effector-react';
import { $inputOtp } from '../../../../../models';
import { TextInput, Text } from 'react-native';
import { Typography } from '../../atoms';

const OtpContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const Title = styled(Typography)`
  height: ${({ theme }) => theme.spacing(6)}px;
  width: ${({ theme }) => theme.spacing(5)}px;
  margin-right: ${({ theme }) => theme.spacing(1) + 2}px;
  background-color: ${({ theme }) => theme.palette.content.secondary};
  text-align: center;
  padding: 10px;
  border-radius: ${({ theme }) => theme.spacing(2) - 4}px;
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
      <TextInput
        maxLength={4}
        value={otp}
        style={{ height: 0 }}
        showSoftInputOnFocus={true}
      />
      <OtpContainer>
        {[0, 1, 2, 3].map((item, index) => (
          <>
            <Title key={index} variant="subtitle">
              {otp[item]}
            </Title>
            {index === 1 ? (
              <Dash key={randomInt} variant="subtitle">
                -
              </Dash>
            ) : null}
          </>
        ))}
      </OtpContainer>
    </>
  );
};
