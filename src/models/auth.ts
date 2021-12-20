import { createEvent, createStore, restore } from 'effector';
import { TPostAuth } from './types';

export const $isPageAuth = createStore<boolean>(true);

export const setIsPageAuth = createEvent<boolean>();

export const setInputPhone = createEvent<string>();

export const deleteLastChar = createEvent<string>();

export const $inputPhone = createStore<string>('');

$isPageAuth.on(setIsPageAuth, (_, payload) => payload);

$inputPhone.on(setInputPhone, (prevState, payload) => {
  return prevState + payload;
});

$inputPhone.on(deleteLastChar, state => {
  let i = state.length - 1;
  const res = state.slice(0, i);
  return setInputPhone(res);
});

export const $postAuthId = createStore<TPostAuth>('');

export const setPostAuthId = createEvent<TPostAuth>();

export const $postAuthCode = createStore<TPostAuth>('');

export const setPostAuthCode = createEvent<TPostAuth>();

$postAuthId.on(setPostAuthId, (_, payload) => payload);

$postAuthCode.on(setPostAuthCode, (_, payload) => payload);

export const setTimerMinutes = createEvent<number>();

export const $timerMinutes = restore(setTimerMinutes, 3);

export const setTimerSeconds = createEvent<number>();

export const $timerSeconds = restore(setTimerSeconds, 0);

export const resetTimer = createEvent();

$timerSeconds.reset(resetTimer);

$timerMinutes.reset(resetTimer);

export const $inputOtp = createStore<string>('');

export const setInputOtp = createEvent<string>();

$inputOtp.on(setInputOtp, (prevState, payload) => {
  return prevState + payload;
});

$inputOtp.on(deleteLastChar, state => {
  let i = state.length - 1;
  const res = state.slice(0, i);
  return setInputOtp(res);
});

export const $isPageOtp = createStore<boolean>(true);

export const setIsPageOtp = createEvent<boolean>();

$isPageOtp.on(setIsPageOtp, (_, payload) => payload);
