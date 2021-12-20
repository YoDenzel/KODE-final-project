export type Snack = {
  title: string;
  id: number;
};

export type ItemsType = {
  category_icon: string;
  category_id: string;
  category_name: string;
  services: Array<{
    service_icon: string;
    service_id: string;
    service_name: string;
  }>;
};

export type TCategories = {
  id: string;
  icon: string;
  name: string;
  services?: Array<TServices>;
};

export type TServices = {
  service_icon: string;
  service_id: string;
  service_name: string;
};
