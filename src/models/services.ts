import { combine, createEvent, createStore, restore } from 'effector';

import { TCategories } from './types';

export type ServicesStore = TCategories[];

export const $services = createStore<ServicesStore>([]);

export const updateServices = createEvent<ServicesStore>();

export const setSearchPhrase = createEvent<string>();

export const $searchPhrase = restore(setSearchPhrase, '');

export const setError = createEvent<boolean>();

export const $error = restore(setError, false);

export const $filteredServices = combine(
  {
    services: $services,
    searchPhrase: $searchPhrase,
  },
  ({ services, searchPhrase }) => {
    return services.map((item: TCategories) => ({
      id: item.id,
      name: item.name,
      icon: item.icon,
      services: item?.services?.filter(v => {
        if (searchPhrase === '') {
          return v;
        }

        if (
          v.service_name
            .toUpperCase()
            .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, '')) ||
          v.service_id
            .toUpperCase()
            .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
        ) {
          return v;
        }
      }),
    }));
  },
);

$services.on(updateServices, (_, payload) => payload);

export const $postHistorySuccess = createStore<boolean>(true);

export const setPostHistorySuccess = createEvent<boolean>();

$postHistorySuccess.on(setPostHistorySuccess, (_, payload) => payload);
