/*
 *
 * TodoList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  todos: [{
    titulo: 'Capacitacion',
    descripcion: 'Imaprtir capacitacion de Redux',
    isDone: true,
  },
  {
    titulo: 'Capacitacion',
    descripcion: 'Imaprtir capacitacion de GraphQL',
    isDone: false,
  },
  ],
});

function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default todoListReducer;
