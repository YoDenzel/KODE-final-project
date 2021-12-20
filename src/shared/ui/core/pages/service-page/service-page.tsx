import { ComponentProps } from 'react';
import { MappedSnackBar } from '../../molecules';
import { HeaderForServices, ItemsList } from '../../organisms';
import { ItemsTemplate } from '../../templates';

type TService = {
  service_icon: string;
  service_id: string;
  service_name: string;
};

export type TParams = {
  data: Array<TService>;
};

export interface TServicePage {
  menu: ComponentProps<typeof ItemsList>;
  header: ComponentProps<typeof HeaderForServices>;
  url: string;
  navigation?: {};
  searchPhrase: string;
  snackBar: ComponentProps<typeof MappedSnackBar>;
}

export const ServicePage = ({
  menu,
  header,
  url,
  navigation,
  searchPhrase,
  snackBar,
}: TServicePage) => {
  return (
    <ItemsTemplate
      header={<HeaderForServices {...header} {...navigation} />}
      menu={<ItemsList {...menu} {...url} {...navigation} {...searchPhrase} />}
      snackBar={<MappedSnackBar {...snackBar} />}
    />
  );
};
