type TInfo = {
  CASHBACK_PERCENT: number;
  CASHBACK_SUM: string | undefined | 0;
  inputMoney: number;
  item: {
    icon: string;
    id: string;
    name: string;
  };
};

type TData = {
  data: TInfo;
};

type TParams = {
  params: TData;
};

export type TRoute = {
  route: TParams;
  navigation: {
    navigate: (v1: string, v2: object) => void;
    goBack: () => void;
  };
};
