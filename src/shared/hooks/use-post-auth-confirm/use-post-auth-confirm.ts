import { fetchPostAuthConfirm } from '@shared/api';
import { TConfirmPost } from '@shared/api/types';
import { useMutation, useQueryClient } from 'react-query';

const UPDATE_QUERY_KEY = 'confirm';

export const usePostAuthConfirm = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    ({ inputPhone, otpCode, otpId }: TConfirmPost) =>
      fetchPostAuthConfirm({ inputPhone, otpCode, otpId }),
    {
      onSettled: () => {
        queryClient.invalidateQueries(UPDATE_QUERY_KEY);
      },
    },
  );
  return mutation;
};
