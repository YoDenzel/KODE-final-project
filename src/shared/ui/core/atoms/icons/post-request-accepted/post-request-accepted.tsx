import { TBaseIconProps } from '@shared/ui/icons/types';

import Svg, { Circle, Path } from 'react-native-svg';

export const PostRequestAccepted = ({ size = 150, color }: TBaseIconProps) => (
  <Svg width={size} height={size} fill="none">
    <Circle opacity={0.055} cx={75} cy={75} r={75} fill={color || '#706D76'} />
    <Circle opacity={0.105} cx={76} cy={76} r={56} fill={color || '#706D76'} />
    <Circle cx={75} cy={75} r={35} fill="#4CD563" />
    <Path
      d="m90.762 69.095-.295-.295a1.25 1.25 0 1 0-1.767-1.767L72.917 82.816l-7.45-7.45a1.25 1.25 0 1 0-1.767 1.767l8.333 8.334c.237.238.553.366.884.366.33 0 .645-.128.883-.366L90.467 68.8l.295.295Z"
      fill="#fff"
      stroke="#fff"
      strokeWidth={2}
    />
  </Svg>
);
