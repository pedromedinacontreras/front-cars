/*
 *
 * Home actions
 *
 */

import {
  DEFAULT_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function incrementAction(contador) {
  return {
    type: 'aumentar',
    contador,
  };
}
