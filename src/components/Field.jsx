import React from 'react';
import {Form} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Field = ({ id, label, help, ...props }) => {
  return (
    <Form.Group controlId={id} >
      <Form.Label>{label}</Form.Label>
      <Form.Control {...props} />
      {help && <Form.HelpBlock>{help}</Form.HelpBlock>}
    </Form.Group>
  );
}

Field.propTypes = {
  id: PropTypes.string.required,
  label: PropTypes.string.required,
  help: PropTypes.string.required
}

export default Field;