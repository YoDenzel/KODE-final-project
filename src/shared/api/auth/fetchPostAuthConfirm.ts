import { ConfirmResponse, TConfirmPost } from '../types';

export const fetchPostAuthConfirm = async ({
  inputPhone,
  otpCode,
  otpId,
}: TConfirmPost): Promise<ConfirmResponse> => {
  await new Promise(resolve => {
    setTimeout(resolve, 3000);
  }); // для имитации загрузки
  const response = fetch(
    'https://stoplight.io/mocks/kode-education/kode-bank/27774162/api/auth/confirm',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Prefer: 'code=200',
      },
      body: `{"otpId":${otpId},"phone":"+7${inputPhone} ","otpCode":${otpCode}}`,
    },
  );

  const data = (await response).json();
  return data;
};
