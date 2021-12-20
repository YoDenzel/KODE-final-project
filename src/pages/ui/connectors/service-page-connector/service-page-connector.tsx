import { useStore } from 'effector-react';
import { useMemo, useState } from 'react';
import {
  $filteredServices,
  $success,
  $queueSnack,
  $searchPhrase,
  setSearchPhrase,
} from '../../../../models';
import { ServicePage } from '@shared/ui/core/pages/service-page/service-page';

type TParams = {
  data: string;
};

interface TServicePageOn {
  route: {
    params: TParams;
  };
  navigation: {
    navigate: (v1: string, v2: object) => void;
    goBack: () => void;
  };
}

type TCategories = {
  id: string;
  icon: string;
  name: string;
  services?: Array<TServices>;
};

type TServices = {
  service_icon: string;
  service_id: string;
  service_name: string;
};

export const ServicePageConnector = ({ route, navigation }: TServicePageOn) => {
  const searchPhrase = useStore($searchPhrase);
  const [clicked, setClicked] = useState(false);
  const filteredData = useStore($filteredServices);
  const snack = useStore($queueSnack);
  const success = useStore($success);

  const id = route.params.data;

  const items = filteredData.filter((item: TCategories) => item.id === id);
  const newItems = items.map((item: TCategories) => item.services);

  const services = useMemo(
    () =>
      newItems[0]?.map((item: TServices) => ({
        id: item.service_id,
        icon: item.service_icon,
        name: item.service_name,
      })) ?? [],
    newItems,
  );

  return (
    <ServicePage
      header={{
        title: 'Мобильная связь',
        searchPhrase: searchPhrase,
        setSearchPhrase: setSearchPhrase,
        clicked: clicked,
        setClicked: setClicked,
        navigation: navigation,
      }}
      searchPhrase=""
      url="salary"
      menu={{ services, navigation, url: 'salary' }}
      snackBar={{
        snack: snack,
        success: success,
      }}
    />
  );
};
