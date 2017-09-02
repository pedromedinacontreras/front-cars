/*
 *
 * TodoList actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_CHECK_ITEM_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setCheckValueAction(index) {
  return {
    type: SET_CHECK_ITEM_ACTION,
    index,
  };
}
