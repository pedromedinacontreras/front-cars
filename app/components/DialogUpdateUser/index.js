/**
*
* DialogUpdateUser
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class DialogUpdateUser extends React.Component {

  state= {
    nombre: this.props.user.nombre,
    correo: this.props.user.correo,
    cumpleanios: this.props.user.fechaNacimiento,
  };

  handleOnSave = () => {
    const { onPressUpdate, user } = this.props;
    const nombre = this.state.nombre;
    const correo = this.state.correo;
    const cumpleanios = this.state.cumpleanios;

    onPressUpdate(nombre, correo, cumpleanios, user.id);
  }

  render() {
    const { open, onPressClose, user } = this.props;

    const actions = [
      <FlatButton
        label="Cancelar"
        primary
        onClick={onPressClose}
      />,
      <FlatButton
        label="Editar"
        primary
        keyboardFocused
        onClick={this.handleOnSave}
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
            onChange={(e, newString) => this.setState({ nombre: newString })}
            defaultValue={user.nombre}
          />
          <TextField
            hintText="Correo"
            onChange={(e, newString) => this.setState({ correo: newString })}
            defaultValue={user.correo}
          />
          <TextField
            hintText="Cumpleaños"
            onChange={(e, newString) => this.setState({ cumpleanios: newString })}
            defaultValue={user.fechaNacimiento}
          />
        </div>
      </Dialog>
    );
  }
}


DialogUpdateUser.propTypes = {
  open: PropTypes.bool,
  onPressClose: PropTypes.func,
  onPressUpdate: PropTypes.func,
  user: PropTypes.object,
};

DialogUpdateUser.defaultProps = {
  onPressClose: () => {},
  onPressSave: () => {},
};

export default DialogUpdateUser;
