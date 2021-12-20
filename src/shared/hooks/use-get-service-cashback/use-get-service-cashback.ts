import { fetchServiceCashback } from '@shared/api';
import { useQuery } from 'react-query';

const QUERY_KEY = 'services_cashback';

const STALE_TIME = 1000 * 60 * 10;

export const useGetServiceCashback = (service_id: string) => {
  const query = useQuery(QUERY_KEY, () => fetchServiceCashback(service_id), {
    staleTime: STALE_TIME,
  });
  return query;
};
