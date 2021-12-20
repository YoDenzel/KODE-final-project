import { fetchServiceList } from '@shared/api';
import { useQuery } from 'react-query';

const QUERY_KEY = 'categories';

const STALE_TIME = 1000 * 60 * 10;

export const useGetServiceList = () => {
  const query = useQuery(QUERY_KEY, () => fetchServiceList(), {
    retry: 0,
    staleTime: STALE_TIME,
  });
  return query;
};
