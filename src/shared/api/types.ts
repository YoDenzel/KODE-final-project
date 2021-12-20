export type ServiceType = {
  category_icon: string;
  category_id: string;
  category_name: string;
  services: Array<{
    service_icon: string;
    service_id: string;
    service_name: string;
  }>;
};

export type ServiceListResponse = {
  category: ServiceType[];
};

export type TCashback = {
  service_id: number;
  cashback_percentage: number;
  recipient_mask: string;
  comment_mask: string | null;
};

export type TServiceID = {
  service_id: number;
};

export type THistoryPost = {
  id: string;
  inputMoney: number;
  CASHBACK_SUM: string | undefined | 0;
};

export type TAuthPost = {
  inputPhone: string;
};

export type OtpResponse = {
  otpCode: string;
  otpId: string;
  otpLen: number;
};
