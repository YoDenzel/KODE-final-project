import { createEvent, createStore } from 'effector';

export const $isAuthorised = createStore<boolean>(false);

export const setAuthorised = createEvent<boolean>();

$isAuthorised.on(setAuthorised, (_, payload) => payload);
