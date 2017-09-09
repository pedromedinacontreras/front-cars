/*
 *
 * Users actions
 *
 */

import {
  DEFAULT_ACTION,
  HANDLE_NEW_USER_MODAL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function handleNewUserModal(isOpen) {
  return {
    type: HANDLE_NEW_USER_MODAL,
    isOpen,
  };
}
