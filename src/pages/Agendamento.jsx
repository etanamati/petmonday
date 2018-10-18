import {Button, Container} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styled from 'styled-components';
import Calendario from '../components/Calendario';

const StyledContent = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const StyledButton = styled(Button)`
  width: 25%;
  margin-top: 5px;
`;

class Agendamento extends Component {
  state = {
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
    
    console.log(event)
  }

  renderHorarios = () => {
    return this.state.horarios.map(hora => {
        return (
            <StyledButton variant="primary" data-id={hora.hora} onClick={() => this.onClick(hora)}>{hora.hora}</StyledButton>
        )
      }
    );
  }

  handleSelectDay = (dia) => {
    console.log('Teste => ', dia)
  }

  render(){
    return (
      <Container>
        <Calendario handleSelectDay={this.handleSelectDay}/>
        <StyledContent>
          {this.renderDia()}
        </StyledContent>
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