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
  deleteLastCharPhone,
  deleteLastCharOtp,
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
  $amountOfTries,
  setAmountOfTries,
  resetAmountOfTries,
  resetOtp,
  resetPhone,
  $guestToken,
  addGuestToken,
  $postAuthAccessRefreshToken,
  setPostAuthAccessRefreshToken,
  setAuthInputPhone,
  $authInputPhone,
} from './auth';

export { $isAuthorised, setAuthorised } from './navigation';

export type { Snack, TServices, ItemsType, TCategories } from './types';
