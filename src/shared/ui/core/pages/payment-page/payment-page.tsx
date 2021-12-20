import { ComponentProps } from 'react';
import { MainHeader, MappedSnackBar } from '../../molecules';
import { ItemsList } from '../../organisms';
import { ItemsTemplate } from '../../templates';

interface TPaymentPage {
  menu: ComponentProps<typeof ItemsList>;
  header: ComponentProps<typeof MainHeader>;
  navigation?: {};
  url: string;
  searchPhrase: string;
  snackBar: ComponentProps<typeof MappedSnackBar>;
}

export const PaymentPage = ({
  menu,
  header,
  navigation,
  url,
  searchPhrase,
  snackBar,
}: TPaymentPage) => {
  return (
    <ItemsTemplate
      menu={<ItemsList {...menu} {...navigation} {...url} {...searchPhrase} />}
      header={<MainHeader {...header} />}
      snackBar={<MappedSnackBar {...snackBar} />}
    />
  );
};
