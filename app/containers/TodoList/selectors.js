import { createSelector } from 'reselect';

/**
 * Direct selector to the todoList state domain
 */
const selectTodoListDomain = () => (state) => state.get('todoList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TodoList
 */

const makeSelectTodoList = () => createSelector(
  selectTodoListDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTodoList;
export {
  selectTodoListDomain,
};
