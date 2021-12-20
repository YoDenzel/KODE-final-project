import { styled } from '@shared/ui/theme';
import { Typography } from '../../atoms';

interface TabBarIconType {
  focused: boolean;
  Icon: Function;
  title: string;
}

const StyledTypography = styled(Typography)<{ focused: boolean }>`
  color: ${props => (props.focused ? '#F678BA' : '#c2c1c6')};
`;

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TabBarIcon = ({ focused, Icon, title }: TabBarIconType) => {
  return (
    <Wrapper>
      {focused ? <Icon color={'#F678BA'} /> : <Icon color={'#C2C1C6'} />}
      <StyledTypography variant="caption1" focused={focused}>
        {title}
      </StyledTypography>
    </Wrapper>
  );
};
