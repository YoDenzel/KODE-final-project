import { setPostAuthAccessRefreshToken } from '../../../models';
import { EnterResponse, TEnterPost } from '../types';

export const fetchPostAuthEnter = async ({
  input,
  guestToken,
}: TEnterPost): Promise<EnterResponse> => {
  const response = fetch(
    'https://stoplight.io/mocks/kode-education/kode-bank/27774162/api/auth/enter',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Prefer: 'code=200',
      },
      body: `{"password":"${input}","guestToken":${guestToken}}`,
    },
  );

  const data = (await response).json();
  setPostAuthAccessRefreshToken(await data);
  return data;
};
