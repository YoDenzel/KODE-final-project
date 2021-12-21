import { createEvent, createStore, restore } from 'effector';
import { persist } from 'effector-storage/rn/async';
import { TPostAuth } from './types';

export const $isPageAuth = createStore<boolean>(true);

export const setIsPageAuth = createEvent<boolean>();

export const setInputPhone = createEvent<string>();

export const deleteLastCharPhone = createEvent<string>();

export const $inputPhone = createStore<string>('');

$isPageAuth.on(setIsPageAuth, (_, payload) => payload);

$inputPhone.on(setInputPhone, (prevState, payload) => {
  return prevState + payload;
});

$inputPhone.on(deleteLastCharPhone, state => {
  let i = state.length - 1;
  const res = state.slice(0, i);
  return setInputPhone(res);
});

export const resetPhone = createEvent();

$inputPhone.reset(resetPhone);

export const $postAuthId = createStore<TPostAuth>('');

export const setPostAuthId = createEvent<TPostAuth>();

export const $postAuthCode = createStore<TPostAuth>('');

export const setPostAuthCode = createEvent<TPostAuth>();

$postAuthId.on(setPostAuthId, (_, payload) => payload);

$postAuthCode.on(setPostAuthCode, (_, payload) => payload);

export const setTimerMinutes = createEvent<number>();

export const $timerMinutes = restore(setTimerMinutes, 1);

export const setTimerSeconds = createEvent<number>();

export const $timerSeconds = restore(setTimerSeconds, 0);

export const resetTimer = createEvent();

$timerSeconds.reset(resetTimer);

$timerMinutes.reset(resetTimer);

export const $inputOtp = createStore<string>('');

export const setInputOtp = createEvent<string>();

export const deleteLastCharOtp = createEvent<string>();

$inputOtp.on(setInputOtp, (prevState, payload) => {
  return prevState + payload;
});

$inputOtp.on(deleteLastCharOtp, state => {
  let i = state.length - 1;
  const res = state.slice(0, i);
  return setInputOtp(res);
});

export const resetOtp = createEvent();

$inputOtp.reset(resetOtp);

export const $isPageOtp = createStore<boolean>(true);

export const setIsPageOtp = createEvent<boolean>();

$isPageOtp.on(setIsPageOtp, (_, payload) => payload);

export const setAmountOfTries = createEvent<number>();

export const $amountOfTries = createStore(5);

$amountOfTries.on(setAmountOfTries, (state, payload) => {
  return state - payload;
});

export const resetAmountOfTries = createEvent();

$amountOfTries.reset(resetAmountOfTries);

export const $guestToken = createStore<string | undefined>('');

export const addGuestToken = createEvent<string | undefined>();

$guestToken.on(addGuestToken, (_, payload) => payload);

persist({
  store: $guestToken,
  key: 'guestToken',
});
