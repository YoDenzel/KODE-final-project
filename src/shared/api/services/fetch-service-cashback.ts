import { TCashback } from '../types';

export const fetchServiceCashback = async (
  service_id: string,
): Promise<TCashback> => {
  const response = await fetch(
    `https://stoplight.io/mocks/kode-education/kode-bank/27774161/api/core/payment/${service_id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
        Prefer: 'code=200',
      },
    },
  );
  const idData = response.json();

  return idData;
};
