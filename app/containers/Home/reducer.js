/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_COUNT_ACTION,
  SET_NAME_ACTION,
} from './constants';

const initialState = fromJS({
  contador: 0,
  nombre: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_COUNT_ACTION:
      return state.set('contador', action.contador);
    case SET_NAME_ACTION:
      return state.set('name', action.name);
    default:
      return state;
  }
}

export default homeReducer;
