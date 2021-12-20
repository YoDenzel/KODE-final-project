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

export {
  $isPageAuth,
  setIsPageAuth,
  $inputPhone,
  setInputPhone,
  deleteLastChar,
  $postAuthCode,
  setPostAuthCode,
  $postAuthId,
  setPostAuthId,
  $timerMinutes,
  $timerSeconds,
  setTimerSeconds,
  setTimerMinutes,
  resetTimer,
  $inputOtp,
  setInputOtp,
  $isPageOtp,
  setIsPageOtp,
} from './auth';

export type { Snack, TServices, ItemsType, TCategories } from './types';
