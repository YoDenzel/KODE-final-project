import { EnterResponse, TEnterPost } from '../types';

export const fetchPostAuthEnter = async ({
  password,
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
      body: `{"password":${password},"guestToken":${guestToken}}`,
    },
  );

  const data = (await response).json();
  console.log(await data);
  return data;
};
