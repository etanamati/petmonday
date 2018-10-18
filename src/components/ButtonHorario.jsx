import {Button} from 'react-bootstrap';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  width: 25%;
  margin-top: 5px;
`;

const ButtonHorario = ({handleClick, hora, agendado}) => {
  return (
    <StyledButton variant={agendado ? "secundary" :"primary"} onClick={() => handleClick(hora)}>{hora.hora}</StyledButton>
  )
}

export default ButtonHorario;