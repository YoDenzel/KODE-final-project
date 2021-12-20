import { TBaseIconProps } from '@shared/ui/icons/types';
import Svg, { Path } from 'react-native-svg';

export const Atm = ({ size = 24, color }: TBaseIconProps) => (
  <Svg width={size} height={size} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3.401 5.5 7.45v6.801a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1-.416-1.374l8-5a.75.75 0 0 1 .832 0l8 5A.75.75 0 0 1 20 8.25v6a.75.75 0 0 1-1.5 0V7.449L12 3.401ZM3.75 16.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Zm-1 3a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5H2.75Zm5.5-9a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75Zm3 .75a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-1.5 0v-3Zm4.5-.75a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75Z"
      fill={color || '#C2C1C6'}
    />
  </Svg>
);
