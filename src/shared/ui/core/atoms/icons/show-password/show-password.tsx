import { TBaseIconProps } from '@shared/ui/icons/types';
import Svg, { Path } from 'react-native-svg';

export const ShowPassword = ({ size = 24, color }: TBaseIconProps) => (
  <Svg width={size} height={size} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.894 10.207a15.186 15.186 0 0 0-.788 1.346 1 1 0 0 0 0 .894c.14.281.404.75.788 1.346.636.985 1.387 1.969 2.251 2.89C5.661 19.368 8.62 21 12 21c3.38 0 6.339-1.633 8.855-4.316a20.483 20.483 0 0 0 2.25-2.892c.385-.595.649-1.064.79-1.345a1 1 0 0 0 0-.894c-.141-.281-.405-.75-.79-1.346a20.49 20.49 0 0 0-2.25-2.89C18.339 4.631 15.38 3 12 3 8.62 3 5.661 4.632 3.145 7.316a20.492 20.492 0 0 0-2.25 2.891Zm3.346 5.451A18.972 18.972 0 0 1 1.565 12 18.975 18.975 0 0 1 4.24 8.342C6.617 5.807 9.21 4.5 12 4.5c2.789 0 5.383 1.307 7.76 3.842A18.974 18.974 0 0 1 22.435 12a18.971 18.971 0 0 1-2.675 3.658C17.383 18.194 14.79 19.5 12 19.5c-2.789 0-5.383-1.306-7.76-3.842ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm2.5-4a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      fill={color || '#C2C1C6'}
    />
  </Svg>
);
