import {Container} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styled from 'styled-components';
import {Calendario, ButtonHorario, ModalAlert} from '../components';

const StyledContent = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;



class Agendamento extends Component {
  state = {
    showModal: false,
    horarios: [
      { disponivel: true, hora: '8:00' },
      { disponivel: true, hora: '9:00' },
      { disponivel: true, hora: '10:00' },
      { disponivel: true, hora: '11:00' },
      { disponivel: true, hora: '12:00' },
      { disponivel: true, hora: '13:00' },
      { disponivel: true, hora: '14:00' },
      { disponivel: true, hora: '15:00' },
      { disponivel: true, hora: '16:00' },
      { disponivel: true, hora: '17:00' }
    ]
  }

  renderDia = () => {
    return (this.renderHorarios());
  }

  onClick = event => {
    
    if (!this.props.usuarioLogado) {
      this.setState({showModal: true});
    }
  }

  renderHorarios = () => {
    return this.state.horarios.map(hora => {
        return (
            <ButtonHorario agendado={false} handleClick={this.onClick} hora={hora} key={hora.hora} />
        )
      }
    );
  }

  handleCloseModal = () => {
    this.setState({showModal: false});
  }

  handleSelectDay = (dia) => {
  }

  render(){
    return (
      <Container>
        <h1>Selecione um horário e agende o serviço de Banho e Tosa</h1>
        <Calendario handleSelectDay={this.handleSelectDay}/>
        <StyledContent>
          {this.renderDia()}
        </StyledContent>
        <ModalAlert 
          show={this.state.showModal} 
          title={"Faça Login!"} 
          subTitle={""} 
          content="Necessário estar logado para fazer o agendamento!" 
          handleClose={this.handleCloseModal}/>
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

export default connect(mapStateToProps)(Agendamento);