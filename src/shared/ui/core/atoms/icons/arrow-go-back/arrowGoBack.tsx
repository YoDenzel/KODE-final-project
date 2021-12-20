import Svg, { Path } from 'react-native-svg';
import { TBaseIconProps } from '@shared/ui/icons/types';

interface TProps {
  size?: number;
  color?: string;
  style?: {};
}

export const ArrowGoBack = ({ size = 24, color }: TProps) => (
  <Svg width={size} height={size} fill="none">
    <Path
      d="M4.81 12.75H21a.75.75 0 0 0 0-1.5H4.81l5.72-5.72a.75.75 0 1 0-1.06-1.06l-7 7a.75.75 0 0 0 0 1.06l7 7a.75.75 0 1 0 1.06-1.06l-5.72-5.72Z"
      fill={color || '#fff'}
    />
  </Svg>
);
