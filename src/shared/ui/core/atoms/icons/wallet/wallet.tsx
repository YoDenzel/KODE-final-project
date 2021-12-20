import { TBaseIconProps } from '@shared/ui/icons/types';
import Svg, { Path } from 'react-native-svg';

export const Wallet = ({ size = 24, color }: TBaseIconProps) => (
  <Svg width={size} height={size} fill="red">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m20.606 7.11.06.046A2.751 2.751 0 0 1 22.5 9.75v8a2.75 2.75 0 0 1-2.75 2.75h-16A2.75 2.75 0 0 1 1 17.75v-12A2.75 2.75 0 0 1 3.75 3h16a.75.75 0 0 1 .75.75v3.17l.106.19Zm-1.643-.272L19 6.75v-2l-.162-.213L3.75 4.5c-.69 0-1.25.56-1.25 1.25v1l.162.213L18.75 7l.213-.162ZM2.5 8.75l.037-.088.213-.162h17c.69 0 1.25.56 1.25 1.25v8c0 .69-.56 1.25-1.25 1.25h-16c-.69 0-1.25-.56-1.25-1.25v-9Zm16 5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
      fill={color || '#F678BA'}
    />
  </Svg>
);
