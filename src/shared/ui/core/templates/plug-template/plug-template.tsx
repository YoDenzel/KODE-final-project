import { Center } from '@pages/ui';
import { Typography } from '../../atoms';
import { MainHeader } from '../../molecules';

export interface TProps {
  title: string;
  headerTitle: string;
}

export const PlugTemplate = ({ title, headerTitle }: TProps) => {
  return (
    <>
      <MainHeader title={headerTitle} />
      <Center>
        <Typography variant="subtitle">{title}</Typography>
      </Center>
    </>
  );
};
