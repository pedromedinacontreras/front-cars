/**
*
* TodoTable
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from 'components/TodoItem';
import TodoHeader from 'components/TodoHeader';
import {
  Table,
  TableBody,
  TableHeader,
} from 'material-ui/Table';

class TodoTable extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Table
        selectable={false}
        multiSelectable={false}
      >
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TodoHeader />
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          <TodoItem
            onCheck={() => {}}
            titulo={'titulo'}
            descripcion={'descripcion'}
            isDone={false}
          />
        </TableBody>
      </Table>
    );
  }
}

TodoTable.propTypes = {
  onCheck: PropTypes.func,
};

export default TodoTable;
