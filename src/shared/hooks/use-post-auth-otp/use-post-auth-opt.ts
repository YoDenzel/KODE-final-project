import { fetchPostAuth } from '@shared/api';
import { TAuthPost } from '@shared/api/types';
import { useMutation, useQueryClient } from 'react-query';

const UPDATE_QUERY_KEY = 'opt';

export const usePostAuthOtp = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    ({ inputPhone }: TAuthPost) => fetchPostAuth({ inputPhone }),
    {
      onSettled: () => {
        queryClient.invalidateQueries(UPDATE_QUERY_KEY);
      },
    },
  );
  return mutation;
};
