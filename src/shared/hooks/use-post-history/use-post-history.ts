import { fetchPostHistory } from '@shared/api';
import { THistoryPost } from '@shared/api/types';

import { useMutation, useQueryClient } from 'react-query';

const UPDATE_QUERY_KEY = 'categories';

export const usePostHistory = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    ({ id, inputMoney, CASHBACK_SUM }: THistoryPost) =>
      fetchPostHistory({ id, inputMoney, CASHBACK_SUM }),
    {
      onSettled: () => {
        queryClient.invalidateQueries(UPDATE_QUERY_KEY);
      },
    },
  );
  return mutation;
};
