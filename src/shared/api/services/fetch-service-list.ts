import { ServiceListResponse } from '../types';

export const fetchServiceList = async (): Promise<ServiceListResponse> => {
  const response = await fetch(
    'https://stoplight.io/mocks/kode-education/kode-bank/27774161/api/core/payment/list',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
        Prefer: 'code=200',
      },
    },
  );
  const data = response.json();

  return data;
};
