import { Snack } from '../../../../../models/types';
import { SnackBar } from './snackbar';

interface TMappedSneckBar {
  snack: Snack[];
  success: boolean;
}

export const MappedSnackBar = ({ snack, success }: TMappedSneckBar) => {
  return (
    <>
      {snack.map((item: { title: string; id: number }) => (
        <SnackBar key={item.id} message={item.title} success={success} />
      ))}
    </>
  );
};
