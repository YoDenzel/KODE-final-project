import { setPostHistorySuccess } from './../../../models';
import { THistoryPost } from '../types';

export const fetchPostHistory = async ({
  id,
  inputMoney,
  CASHBACK_SUM,
}: THistoryPost) => {
  const response = fetch(
    'https://stoplight.io/mocks/kode-education/kode-bank/27774161/api/core/history',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 1234',
        Prefer: 'code=200',
      },
      body: `{"card_id":0,"service_id":"${id}","size":${inputMoney},"size_cashback":${Number(
        CASHBACK_SUM,
      )},"comment":"string","period_from":"string","period_to":"string"}`,
    },
  );
  const data = (await response).json();
  setPostHistorySuccess(await data);
  return data;
};
