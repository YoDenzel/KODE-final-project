import { OtpResponse, TAuthPost } from '../types';

export const fetchPostAuth = async ({
  inputPhone,
}: TAuthPost): Promise<OtpResponse> => {
  const response = fetch(
    'https://stoplight.io/mocks/kode-education/kode-bank/27774162/api/auth/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Prefer: 'code=200',
      },
      body: `{"phone": ${inputPhone}}`,
    },
  );

  const data = (await response).json();

  return data;
};
