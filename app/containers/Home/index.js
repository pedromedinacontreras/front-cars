/*
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { createStructuredSelector } from 'reselect';
import makeSelectHome from './selectors';
import { Container, Title, Card, Text, Row, TextInput, ButtonsContainer } from './StyledComponents';

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    value: 0,
  }
  render() {
    return (
      <Container>
        <Title>Capacitación Redux</Title>
        <Card>
          <Row>
            <Text>Contador: </Text>
            <Text>{0}</Text>
          </Row>
          <ButtonsContainer>
            <RaisedButton label="Restar" />
            <RaisedButton label="Sumar" />
          </ButtonsContainer>
          <TextInput id="input-text" placeholder="Nombre" />
          <SelectField
            floatingLabelText="Puesto"
            value={this.state.value}
            onChange={(event, value) => this.setState({ value })}
          >
            <MenuItem value={0} primaryText="Desarrollador" />
            <MenuItem value={1} primaryText="Diseñador" />
            <MenuItem value={2} primaryText="Analista" />
            <MenuItem value={3} primaryText="Tester" />
          </SelectField>
        </Card>
      </Container>
    );
  }
}

Home.propTypes = {
  Home: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  Home: makeSelectHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
