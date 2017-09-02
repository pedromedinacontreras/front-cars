/*
 *
 * TodoList
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TodoTable from 'components/TodoTable';
import makeSelectTodoList from './selectors';
import { Container, Title, FloatingButton } from './StyledComponents';

export class TodoList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <Title>Todos</Title>
        <TodoTable />
        <FloatingButton onTouchTap={() => {}}>
          <ContentAdd />
        </FloatingButton>
      </Container>
    );
  }
}

TodoList.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  TodoList: makeSelectTodoList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
