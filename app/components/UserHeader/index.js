/**
*
* TableHeader
*
*/

import React from 'react';
import {
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';


function TodoHeader() {
  return (
    <TableRow>
      <TableHeaderColumn>Nombre</TableHeaderColumn>
      <TableHeaderColumn>Correo</TableHeaderColumn>
      <TableHeaderColumn>Fecha Nacimiento</TableHeaderColumn>
      <TableHeaderColumn />
    </TableRow>
  );
}

TodoHeader.propTypes = {

};

export default TodoHeader;
