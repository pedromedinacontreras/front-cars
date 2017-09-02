/*
 *
 * Home actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_COUNT_ACTION,
  SET_NAME_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setCountAction(contador) {
  return {
    type: SET_COUNT_ACTION,
    contador,
  };
}

export function setNameAction(name) {
  return {
    type: SET_NAME_ACTION,
    name,
  };
}
