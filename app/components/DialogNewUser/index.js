/**
*
* DialogNewUser
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

function DialogNewUser({ open, onPressClose, onPressSave }) {
  const actions = [
    <FlatButton
      label="Cancelar"
      primary
      onClick={onPressClose}
    />,
    <FlatButton
      label="Guardar"
      primary
      keyboardFocused
      onClick={onPressSave}
    />,
  ];
  return (
    <Dialog
      title="Usuario"
      actions={actions}
      modal={false}
      open={open}
      onRequestClose={onPressClose}
    >
      <div>
        <TextField
          hintText="Nombre"
          style={{ marginRight: 16 }}
        />
        <TextField
          hintText="Correo"
        />
        <TextField
          hintText="Cumpleaños"
        />
      </div>
    </Dialog>
  );
}

DialogNewUser.propTypes = {
  open: PropTypes.bool,
  onPressClose: PropTypes.func,
  onPressSave: PropTypes.func,
};

DialogNewUser.defaultProps = {
  onPressClose: () => {},
  onPressSave: () => {},
};

export default DialogNewUser;
