import { TBaseIconProps } from '@shared/ui/icons/types';
import Svg, { Path } from 'react-native-svg';

export const Payment = ({ size = 24, color }: TBaseIconProps) => (
  <Svg width={size} height={size} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.75 17a.75.75 0 0 0 0 1.5 2.75 2.75 0 0 0 2.75-2.75v-10A2.75 2.75 0 0 0 19.75 3h-16A2.75 2.75 0 0 0 1 5.75v10a2.75 2.75 0 0 0 2.75 2.75.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25v-10c0-.69.56-1.25 1.25-1.25h16c.69 0 1.25.56 1.25 1.25v10c0 .69-.56 1.25-1.25 1.25ZM11 11.75v7.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72v-7.19a.75.75 0 0 0-1.5 0Zm-6-4A.75.75 0 0 1 5.75 7h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 5 7.75Z"
      fill={color || '#F678BA'}
    />
  </Svg>
);
