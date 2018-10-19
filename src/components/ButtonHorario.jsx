import {Button} from 'react-bootstrap';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled(Button)`
  width: 15%;
  margin-top: 5px;
`;

const buttonStatus = {
  agendado: 'danger',
  selecionado: 'primary',
  disponivel: 'secondary'
}

const ButtonHorario = ({handleClick, hora}) => {

  return (
    <StyledButton variant={buttonStatus[hora.status]} onClick={() => handleClick(hora)}>{hora.hora}</StyledButton>
  )
}

ButtonHorario.propTypes = {
  handleClick: PropTypes.func,
  hora: PropTypes.object
}

export default ButtonHorario;