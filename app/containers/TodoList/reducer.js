/*
 *
 * TodoList reducer
 *
 */

import { fromJS, List } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_CHECK_ITEM_ACTION,
} from './constants';

const initialState = fromJS({
  todos: [{
    titulo: 'Capacitacion',
    descripcion: 'Imaprtir capacitacion de Redux',
    isDone: false,
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
    case SET_CHECK_ITEM_ACTION: {
      const { index } = action;
      const todos = state.get('todos');
      const updatedTodos = todos.update(index, (todo) => {
        const isDone = todo.get('isDone');
        return todo.set('isDone', !isDone);
      });
      return state.set('todos', List.of(...updatedTodos));
    }
    default:
      return state;
  }
}

export default todoListReducer;
