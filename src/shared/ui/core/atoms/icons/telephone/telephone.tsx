import { TBaseIconProps } from '@shared/ui/icons/types';
import Svg, { Path } from 'react-native-svg';

export const Telephone = ({ size = 24, color }: TBaseIconProps) => (
  <Svg width={24} height={24} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 1h9a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Zm0 1.5A1.5 1.5 0 0 0 6 4v16a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 20V4a1.5 1.5 0 0 0-1.5-1.5h-9ZM12 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={color || '#6C78E6'}
    />
  </Svg>
);
