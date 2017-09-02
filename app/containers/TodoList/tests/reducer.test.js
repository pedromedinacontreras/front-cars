
import { fromJS } from 'immutable';
import todoListReducer from '../reducer';

describe('todoListReducer', () => {
  it('returns the initial state', () => {
    expect(todoListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
