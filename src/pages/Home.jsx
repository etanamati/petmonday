import React, { Component } from 'react';
import styled from 'styled-components';
import img from '../assets/img/home.jpg';
import { Button, Form, Col } from 'react-bootstrap';
import CidadeService from '../services/CidadeService';

const StyledContent = styled.div`
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    height: 93vh;
    display: flex;
    align-items: center;
    
`;

const StyledForm = styled(Form)`
  margin-left: 100px;
  width: 25%;
`;

class Home extends Component {
  state = {
    cidades: [],
    selecionada: undefined
  }

  componentDidMount(){
    CidadeService.getCidades().then((cidades) => this.setState({cidades}));
  }

  renderOpcoesCidade = () => {
    return (this.state.cidades.map(cidade => <option key={cidade.uid} value={cidade.uid}>{cidade.descricao}</option>));
  }

  onChange = (event) => {
    this.setState({selecionada: event.target.value})
  }

  onClick = () => {
    this.props.history.push(`/cidade/${this.state.selecionada}`);
  }

  isButtonEnable = () => this.state.selecionada ? true : false;

  render() {
    return (
      <StyledContent>
        <StyledForm>
          <Form.Row>
            <Col>
              <Form.Control as="select" onChange={this.onChange}
              value={this.state.selecionada}>
                <option value="">Escolha sua cidade</option>
                {this.renderOpcoesCidade()}
              </Form.Control>
            </Col>
            <Col>
              <Button variant={this.isButtonEnable() ? "primary" : "secondary"} disabled={!this.isButtonEnable()} onClick={this.onClick}>
                <i className="fa fa-search"/>
                Selecione
              </Button>
            </Col>
          </Form.Row>
        </StyledForm>
      </StyledContent>
    );
  }
}

export default Home;