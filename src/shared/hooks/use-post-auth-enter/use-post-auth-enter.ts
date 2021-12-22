import { fetchPostAuthEnter } from '@shared/api';
import { TEnterPost } from '@shared/api/types';
import { useMutation, useQueryClient } from 'react-query';

const UPDATE_QUERY_KEY = 'enter';

export const usePostAuthEnter = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    ({ input, guestToken }: TEnterPost) =>
      fetchPostAuthEnter({ input, guestToken }),
    {
      onSettled: () => {
        queryClient.invalidateQueries(UPDATE_QUERY_KEY);
      },
    },
  );
  return mutation;
};
