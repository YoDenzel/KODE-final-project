import { useEffect, useRef } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { styled } from '@shared/ui/theme';
import { reset } from '../../../../../models';
import { Icons, Typography } from '../../atoms';

const Wrapper = styled(Animated.View)<{ success: boolean }>`
  position: absolute;
  margin: ${({ theme }) => theme.spacing(1.2)}px;
  background-color: ${({ theme, success }) =>
    success ? theme.palette.indicator.success : theme.palette.indicator.error};
  padding: ${({ theme }) => theme.spacing(3.2)}px;
  border-radius: ${({ theme }) => theme.spacing(2) - 2}px;
  width: 304px;
  align-self: center;
  top: 5%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const IconBlock = styled(TouchableOpacity)`
  position: absolute;
  right: ${({ theme }) => theme.spacing(2)}px;
`;

const Title = styled(Typography)`
  color: #fff;
  margin-right: ${({ theme }) => theme.spacing(8)}px;
`;

interface TSnackBar {
  message: string;
  success: boolean;
}

export const SnackBar = ({ message, success }: TSnackBar) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(2350),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Wrapper
      success={success}
      style={{
        opacity,
        transform: [
          {
            translateY: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [-10, 0],
            }),
          },
        ],
      }}
    >
      <Title variant="body15Regular">{message}</Title>
      <IconBlock onPress={() => reset()}>
        <Icons.ClearPhoneInput color="#fff" />
      </IconBlock>
    </Wrapper>
  );
};
