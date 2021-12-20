import { TBaseIconProps } from '@shared/ui/icons/types';
import Svg, { Path } from 'react-native-svg';

interface TProps {
  size?: number;
  color?: string;
}

export const ClearPhoneInput = ({ size = 24, color }: TProps) => (
  <Svg width={size} height={size} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.28 5.22a.75.75 0 0 0-1.06 1.06l5.596 5.596-5.596 5.597a.75.75 0 0 0 1.06 1.06l5.596-5.596 5.597 5.596a.75.75 0 0 0 1.06-1.06l-5.596-5.596 5.596-5.597a.75.75 0 1 0-1.06-1.06l-5.596 5.596L6.28 5.22Z"
      fill={color ?? '#706D76'}
    />
  </Svg>
);
