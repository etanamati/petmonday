import React, {Component} from 'react';
import {Container, Form} from 'react-bootstrap';
import Field from '../components/Field';

class Login extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Group>
            <Field id="formControlsNome" label="Nome:" type="text" name="displayName"/>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default Login;