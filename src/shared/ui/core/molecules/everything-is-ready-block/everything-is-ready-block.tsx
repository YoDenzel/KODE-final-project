import { styled } from '@shared/ui/theme';
import { ElementType, ReactElement } from 'react';
import { Icons, Typography } from '../../atoms';

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

const ImageBlock = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing(4)}px;
`;
const Title = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;
const Info = styled(Typography)`
  text-align: center;
  margin: 0 ${({ theme }) => theme.spacing(2)}px;
`;

interface TEverythingReadyBlock {
  title: string;
  info: string;
  image: ReactElement;
}

export const EverythingReadyBlock = ({
  title,
  info,
  image,
}: TEverythingReadyBlock) => {
  return (
    <Wrapper>
      <ImageBlock>{image}</ImageBlock>
      <Title variant="body17Medium">{title}</Title>
      <Info variant="body15Regular">{info}</Info>
    </Wrapper>
  );
};
