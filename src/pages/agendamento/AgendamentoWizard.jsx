import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { horariosDisponiveis } from '../../constantes';
import AgendamentoService from '../../services/AgendamentoService';
import ProfissionalService from '../../services/ProfissionalService';
import { Wizard, WizardStep } from '../../components';
import Profissional from './Profissional';
import Horario from './Horario';

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
    horarios: this.initialStateHorarios(),
    profissional: '',
    profissionais: [],
    observacao: ''
  }

  componentDidMount() {
    const estabelecimento = this.props.match.params.id;
    ProfissionalService.getProfissionais(estabelecimento)
      .then(profissionais => {
        this.setState({ estabelecimento, profissionais });
      });
  }

  atualizarAgendamentos = (data) => {
    const { estabelecimento, profissional } = this.state;
    this.setState({ loading: true });

    AgendamentoService.getAgendamentos(estabelecimento, profissional, this.formatDate(data))
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
    const { estabelecimento, data, hora, profissional, observacao } = this.state;
    AgendamentoService.agendar({data: this.formatDate(data), hora, estabelecimento, profissional, observacao})
      .then(() => this.atualizarAgendamentos(data))
      .finally(() => this.handleCloseModal());
  }

  handleCloseModal = () => {
    this.setState({ showModal: false, showModalConfirm: false });
  }

  handleSelectDay = (listaData) => {
    const data = new Date(listaData[0]);
    this.setState({ data }, () => this.atualizarAgendamentos(data));
  }

  handleSelectProfissional = event => {
    this.setState({ profissional: event.target.value }, () =>
      this.atualizarAgendamentos(this.state.data)
    );
  }

  formatDate = (date) => {
    return ("0" + date.getDate()).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();
  }

  canChange = (currentStep, newState) => {
    if (newState > currentStep
      && currentStep === 0
      && this.state.profissional === '') {
      this.setState({ showModal: true });
      return false;
    }
    return true;
  }

  handleChangeObservacao = event => {
    this.setState({ observacao: event.target.value });
  }

  render() {
    const { data,
      showModal,
      showModalConfirm,
      horarios,
      profissionais,
      profissional,
      observacao } = this.state;

    return (
      <Container style={{ marginTop: 30 }}>
        <h1><i className="fa fa-shower">Agendamento banho e tosa</i></h1>
        <Wizard canChange={this.canChange}>
          <WizardStep id={0} title="Profissionais">

            <Profissional
              showModal={showModal}
              handleCloseModal={this.handleCloseModal}
              profissional={profissional}
              profissionais={profissionais}
              handleSelectProfissional={this.handleSelectProfissional}
              observacao={observacao}
              handleChangeObservacao={this.handleChangeObservacao}
            />

          </WizardStep>
          <WizardStep id={1} title="Horários">

            <Horario
              data={data}
              horarios={horarios}
              showModal={showModal}
              showModalConfirm={showModalConfirm}
              handleSelectDay={this.handleSelectDay}
              handleCloseModal={this.handleCloseModal}
              handleConfirm={this.handleConfirm}
              handleSelectHora={this.handleSelectHora}
            />

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