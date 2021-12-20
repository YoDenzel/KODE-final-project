import { TBaseIconProps } from '@shared/ui/icons/types';
import Svg, { Path } from 'react-native-svg';

export const ChevronDown = ({ size = 24, color }: TBaseIconProps) => (
  <Svg width={size} height={size} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.22 9.72a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 1 0-1.06-1.06L12 13.44 8.28 9.72a.75.75 0 0 0-1.06 0Z"
      fill={color || '#706D76'}
    />
  </Svg>
);
