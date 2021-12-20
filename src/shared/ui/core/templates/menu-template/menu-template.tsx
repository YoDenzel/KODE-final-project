import { Background } from '@pages/ui';
import { ReactNode } from 'react';

interface TItemsTemplate {
  header: ReactNode;
  menu: ReactNode;
  snackBar: ReactNode;
}

export const ItemsTemplate = ({ header, menu, snackBar }: TItemsTemplate) => {
  return (
    <Background>
      {header}
      {menu}
      {snackBar}
    </Background>
  );
};
