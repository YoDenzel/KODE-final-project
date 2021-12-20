import Svg, { Path } from 'react-native-svg';

interface TProps {
  size?: number;
  color?: string;
}

export const ClearSearchbar = ({ size = 24, color }: TProps) => (
  <Svg width={24} height={24} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.66 17.66A8 8 0 1 1 6.348 6.347 8 8 0 0 1 17.66 17.66ZM8.469 8.468a.75.75 0 0 1 1.06 0l2.476 2.475 2.475-2.475a.75.75 0 0 1 1.06 1.06l-2.475 2.476 2.475 2.475a.75.75 0 0 1-1.06 1.06l-2.475-2.475-2.475 2.475a.75.75 0 1 1-1.06-1.06l2.474-2.475-2.475-2.475a.75.75 0 0 1 0-1.06Z"
      fill={color || '#C2C1C6'}
    />
  </Svg>
);
