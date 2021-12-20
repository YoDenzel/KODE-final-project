import React from 'react';
import { useWindowDimensions } from 'react-native';
import { Typography } from '../../atoms';
import { styled } from '@shared/ui/theme';

const Wrapper = styled.SafeAreaView<{ height: number }>`
  width: 100%;
  height: ${props => props.height / 5}px;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const SubmitButtonContainer = styled.TouchableOpacity`
  width: 95%;
  height: 60px;
  border-radius: 26px;
  background-color: ${({ theme }) => theme.palette.button.primary};
  justify-content: center;
  align-items: center;
`;

const ButtonTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.button.secondary};
`;

interface TSubmitButton {
  title: string;
  checkConditions: Function;
}

export const SubmitButton: React.FC<TSubmitButton> = ({
  title,

  checkConditions,
}) => {
  const { height } = useWindowDimensions();

  return (
    <>
      <Wrapper height={height}>
        <SubmitButtonContainer
          onPress={() => {
            checkConditions();
          }}
        >
          <ButtonTitle variant="button">{title}</ButtonTitle>
        </SubmitButtonContainer>
      </Wrapper>
    </>
  );
};
