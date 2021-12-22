import { useEffect } from 'react';
import { useStore } from 'effector-react';
import {
  $snacks,
  $success,
  setSuccess,
  addSnack,
  $queueSnack,
  snackLifeTimeFx,
  TCategories,
  updateServices,
} from '../../../../models';
import { PaymentPage } from '@shared/ui/core/pages';
import { useGetServiceList } from '@shared/hooks';
import { id } from '../money-transfer-page-connector/money-transfer-page-connector';
import { ServicesStore } from '../../../../models/services';

interface TPayment {
  navigation: {
    navigate: (v1: string, v2: object) => void;
  };
}

export function PaymentPageConnector({ navigation }: TPayment) {
  const snack = useStore($queueSnack);
  const success = useStore($success);
  const snacksStorage = useStore($snacks);
  const { data, isError } = useGetServiceList();

  const services: TCategories[] =
    data?.category?.map(item => ({
      id: item.category_id,
      name: item.category_name,
      services: item.services,
      icon: item.category_icon,
    })) ?? [];

  useEffect(() => {
    updateServices(services as ServicesStore);
  }, [data]);

  useEffect(() => {
    snackLifeTimeFx();
  }, [snacksStorage]);

  useEffect(() => {
    if (isError) {
      setSuccess(false);
      addSnack({
        title: 'Список не подгружен',
        id: id,
      });
    }
  }, [isError]);

  return (
    <>
      <PaymentPage
        header={{
          title: 'Платежи',
        }}
        menu={{ services, navigation, url: 'services' }}
        url="services"
        searchPhrase=""
        snackBar={{
          snack: snack,
          success: success,
        }}
      />
    </>
  );
}
