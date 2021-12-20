import { createEffect, createEvent, createStore, restore } from 'effector';
import { Snack } from './types';

type Snacks = Snack[];

export const $snacks = createStore<Snacks>([]);

export const removeSnack = createEvent<number>();

$snacks.on(removeSnack, state => {
  const res = [...state];
  const item = res.length - 1;
  delete res[item];
  return res;
});

export const addSnack = createEvent<Snack>();

export const resetSnack = createEvent<null>();

$snacks.reset(resetSnack);

$snacks.on(addSnack, (state, snack) => [...state, snack]);

export const setSuccess = createEvent<boolean>();

export const $success = restore(setSuccess, false);

export const snackLifeTimeFx = createEffect(() => {
  $hasSnack ? setTimeout(reset, 3600) : null;
});

export const $queueSnack = createStore<Snacks>([]);

export const $hasSnack = $queueSnack.map(item => item.length > 0);

export const reset = createEvent();

$queueSnack.reset(reset);

type TSnackAdded = {
  title: string;
  successful: boolean;
  id: number;
};

export const snackAdded = ({ title, successful, id }: TSnackAdded) => {
  addSnack({
    title: title,
    id: id,
  });
  setSuccess(successful);
  removeSnack(1);
};
