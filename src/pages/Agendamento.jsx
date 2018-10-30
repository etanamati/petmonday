import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Calendario, ButtonHorario, ModalAlert, ModalConfirm } from '../components';
import { horariosDisponiveis } from '../constantes';
import AgendamentoService from '../services/AgendamentoService';
import { Wizard, WizardStep } from '../components';

const StyledContent = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const statusAgendamento = {
  agendado: 'agendado',
  selecionado: 'selecionado',
  disponivel: 'disponivel'
}

class Agendamento extends Component {
  initialStateHorarios = () => {
    return horariosDisponiveis.map(hora => ({
      hora,
      status: statusAgendamento.disponivel
    }))
  }

  state = {
    showModal: false,
    showModalConfirm: false,
    data: new Date(),
    hora: '',
    horarios: this.initialStateHorarios()
  }

  componentDidMount() {
    const estabelecimento = this.props.match.params.id
    this.setState({ estabelecimento });
    this.atualizarAgendamentos(estabelecimento, this.state.data);
  }

  atualizarAgendamentos = (estabelecimento, data) => {
    this.setState({ loading: true });

    AgendamentoService.getAgendamentos(estabelecimento, this.formatDate(data))
      .then((agendamentos => {
        const agendamentosAtualizados = this.initialStateHorarios().map(horario => ({
          hora: horario.hora,
          status: agendamentos.some((element) => element.hora === horario.hora)
            ? statusAgendamento.agendado
            : statusAgendamento.disponivel
        }));
        this.setState({ horarios: agendamentosAtualizados });
      }))
      .finally(() => this.setState({ loading: false }));
  }

  renderDia = () => {
    return (this.renderHorarios());
  }

  renderHorarios = () => {
    return this.state.horarios.map(hora => {
      return (
        <ButtonHorario handleClick={this.handleSelectHora} hora={hora} key={hora.hora} status={hora.status} />
      )
    }
    );
  }

  handleSelectHora = event => {
    if (!this.props.usuarioLogado) {
      this.setState({ showModal: true });
    } else {
      if (event.status === statusAgendamento.disponivel) {
        this.setState({ status: statusAgendamento.selecionado, hora: event.hora, showModalConfirm: true });
      }
    }
  }

  handleConfirm = () => {
    const { estabelecimento, data, hora } = this.state;
    AgendamentoService.agendar(this.formatDate(data), hora, estabelecimento)
      .then(() => this.atualizarAgendamentos(estabelecimento, data))
      .finally(() => this.handleCloseModal());
  }

  handleCloseModal = () => {
    this.setState({ showModal: false, showModalConfirm: false });
  }

  handleSelectDay = (listaData) => {
    const data = new Date(listaData[0]);
    this.setState({ data }, () => this.atualizarAgendamentos(this.state.estabelecimento, data));
  }

  formatDate = (date) => {
    return ("0" + date.getDate()).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();
  }

  render() {
    const { data, showModal, showModalConfirm } = this.state;

    return (
      <Container style={{marginTop: 30}}>
        <h1>Agendamento Banho e Tosa</h1>
        <Wizard>
          <WizardStep id={0} title="Horários">
            <StyledContent>
              <Calendario handleSelectDay={this.handleSelectDay} selectedDay={data} />
              {this.renderDia()}
              <ModalAlert
                show={showModal}
                title={"Faça Login!"}
                subTitle={""}
                content="Necessário estar logado para fazer o agendamento!"
                handleClose={this.handleCloseModal} />
              <ModalConfirm
                show={showModalConfirm}
                title={"Confirmação!"}
                subTitle={""}
                content="Deseja confirma o agendamento?"
                handleClose={this.handleCloseModal}
                handleConfirm={this.handleConfirm} />
            </StyledContent>
          </WizardStep>
          <WizardStep id={1} title="Profissionais">
            <h1>Profissionais</h1>
          </WizardStep>
          <WizardStep id={2} title="Resumo">
            <h1>Resumo</h1>
          </WizardStep>
        </Wizard>
      </Container>

    )
  }
}

Agendamento.propTypes = {
  usuarioLogado: PropTypes.object
}

const mapStateToProps = store => ({
  usuarioLogado: store.usuario.usuarioLogado
})

const ConnectedComponent = connect(mapStateToProps)(Agendamento);
export { ConnectedComponent as default, Agendamento };