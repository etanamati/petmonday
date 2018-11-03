import { connect } from 'react-redux';
import React, { Component } from 'react';
import styled from 'styled-components';
import img from '../assets/img/home.jpg';
import { Button, Form, Col } from 'react-bootstrap';
import CidadeService from '../services/CidadeService';
import { selecionarCidade } from '../state/actions/CidadeActions';

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
    cidades: []
  }

  componentDidMount() {
    CidadeService.getCidades().then((retorno) => {
      const cidades = retorno.reduce((obj, current) =>
        ({ ...obj, [current.uid]: current }), {});
      this.setState({ cidades })
    });
  }

  renderOpcoesCidade = () => {
    const { cidades } = this.state;
    const arrayCidades = Object.keys(cidades).map(cidadesId => cidades[cidadesId]);
    return (arrayCidades.map(cidade => <option key={cidade.uid} value={cidade.uid}>{cidade.descricao}</option>));
  }

  onChange = (event) => {
    const {cidades} = this.state;
    this.props.selecionarCidade(cidades[event.target.value]);
  }

  onClick = () => {
    this.props.history.push(`/cidade`);
  }

  isButtonEnable = () => this.props.cidade ? true : false;

  render() {
    const {cidade} = this.props;
    return (
      <StyledContent>
        <StyledForm>
          <Form.Row>
            <Col>
              <Form.Control as="select" onChange={this.onChange}
                value={cidade ? cidade.uid : undefined}>
                <option value="">Escolha sua cidade</option>
                {this.renderOpcoesCidade()}
              </Form.Control>
            </Col>
            <Col>
              <Button variant={this.isButtonEnable() ? "primary" : "secondary"} disabled={!this.isButtonEnable()} onClick={this.onClick}>
                <i className="fa fa-search" />
                Selecione
              </Button>
            </Col>
          </Form.Row>
        </StyledForm>
      </StyledContent>
    );
  }
}

const mapDispatchToProps = store => ({
  cidade: store.cidade.cidadeSelecionada
});

const ConnectedComponent = connect(mapDispatchToProps, { selecionarCidade })(Home);
export { ConnectedComponent as default, Home };