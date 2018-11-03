import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Calendario, ButtonHorario, ModalAlert, ModalConfirm } from '../../components';

const StyledContent = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

class Horario extends Component {
  renderDia = () => {
    return (this.renderHorarios());
  }

  renderHorarios = () => {
    const {handleSelectHora, horarios} = this.props;

    return horarios.map(hora => {
      return (
        <ButtonHorario handleClick={handleSelectHora} hora={hora} key={hora.hora} status={hora.status} />
      )
    }
    );
  }
  render(){
    const {showModal, showModalConfirm, handleSelectDay, data, handleCloseModal, handleConfirm} = this.props;

    return (<StyledContent>
      <Calendario handleSelectDay={handleSelectDay} selectedDay={data} />
      {this.renderDia()}
      <ModalAlert
        show={showModal}
        title={"Faça Login!"}
        subTitle={""}
        content="Necessário estar logado para fazer o agendamento!"
        handleClose={handleCloseModal} />
      <ModalConfirm
        show={showModalConfirm}
        title={"Confirmação!"}
        subTitle={""}
        content="Deseja confirma o agendamento?"
        handleClose={handleCloseModal}
        handleConfirm={handleConfirm} />
    </StyledContent>);
  }
}

Horario.propTypes = {
  horarios: PropTypes.array.isRequired,
  showModal: PropTypes.bool.isRequired,
  showModalConfirm: PropTypes.bool.isRequired,
  handleSelectDay: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  handleSelectHora: PropTypes.func.isRequired

}

export default Horario;