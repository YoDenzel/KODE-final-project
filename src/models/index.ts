export {
  $services,
  setError,
  $error,
  updateServices,
  setSearchPhrase,
  $filteredServices,
  $searchPhrase,
  setPostHistorySuccess,
  $postHistorySuccess,
} from './services';

export {
  $snacks,
  addSnack,
  resetSnack,
  setSuccess,
  $success,
  snackAdded,
  snackLifeTimeFx,
  $queueSnack,
  $hasSnack,
  reset,
} from './snacks';

export type { Snack, TServices, ItemsType, TCategories } from './types';
