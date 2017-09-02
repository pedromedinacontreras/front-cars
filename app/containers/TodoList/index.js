/*
 *
 * TodoList
 *
 */

import React from 'react';
import ProptTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TodoTable from 'components/TodoTable';
import makeSelectTodoList from './selectors';
import * as TodosActions from './actions';
import { Container, Title, FloatingButton } from './StyledComponents';

export class TodoList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { TodoList: { todos }, setCheckValueAction } = this.props;
    return (
      <Container>
        <Title>Todos</Title>
        <TodoTable
          todos={todos}
          onCheckItem={setCheckValueAction}
        />
        <FloatingButton onTouchTap={() => {}}>
          <ContentAdd />
        </FloatingButton>
      </Container>
    );
  }
}

TodoList.propTypes = {
  TodoList: ProptTypes.object,
  // Actions Creators
  setCheckValueAction: ProptTypes.func,
};

const mapStateToProps = createStructuredSelector({
  TodoList: makeSelectTodoList(),
});

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(TodosActions, dispatch);
  return {
    dispatch,
    ...actions,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
