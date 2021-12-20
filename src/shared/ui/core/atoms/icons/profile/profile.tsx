import { TBaseIconProps } from '@shared/ui/icons/types';
import Svg, { Path } from 'react-native-svg';

export const Profile = ({ size = 24, color }: TBaseIconProps) => (
  <Svg width={size} height={size} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.75 12c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12 6.063 1.25 12 1.25 22.75 6.063 22.75 12Zm-20 0a9.25 9.25 0 1 0 18.5 0 9.25 9.25 0 0 0-18.5 0Zm6.775-.393.187.22-.244.153A4.746 4.746 0 0 0 7.25 16a.75.75 0 0 0 1.5 0 3.25 3.25 0 0 1 6.5 0 .75.75 0 0 0 1.5 0c0-1.65-.848-3.155-2.218-4.02l-.244-.154.187-.22a3.25 3.25 0 1 0-4.95 0ZM10.25 9.5a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0Z"
      fill={color || '#F678BA'}
    />
  </Svg>
);
