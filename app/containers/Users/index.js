/*
 *
 * Users
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import ContentAdd from 'material-ui/svg-icons/content/add';
import UsersTable from 'components/UserTable';
import DialogNewUser from 'components/DialogNewUser';
import makeSelectUsers from './selectors';
import * as UsersActions from './actions';
import { Container, Title, FloatingButton } from './StyledComponents';

const users = [{
  nombre: 'David',
  correo: 'david.1820@gmail.com',
  fechaNacimiento: '24/10/1988',
},
{
  nombre: 'Eduardo',
  correo: 'david.gonzalez@roket.mx',
  fechaNacimiento: '24/10/1988',
},
];

export class Users extends React.Component { // eslint-disable-line react/prefer-stateless-function
  handleOnPressEdit = (/* index */) => {}
  render() {
    const { Users: { open }, handleNewUserModal } = this.props;
    return (
      <Container>
        <Title>Usuarios</Title>
        <UsersTable
          users={users}
          onPressEdit={this.handleOnPressEdit}
        />
        <FloatingButton onTouchTap={() => handleNewUserModal(true)}>
          <ContentAdd />
        </FloatingButton>
        <DialogNewUser
          open={open}
          onPressClose={() => handleNewUserModal(false)}
          onPressSave={() => {}}
        />
      </Container>
    );
  }
}

Users.propTypes = {
  Users: PropTypes.object,
  // Redux-Actions
  handleNewUserModal: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  Users: makeSelectUsers(),
});

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(UsersActions, dispatch);
  return {
    dispatch,
    ...actions,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);
