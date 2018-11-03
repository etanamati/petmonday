import {connect} from 'react-redux';
import React, {Component} from 'react';
import {
  Container,
  Row, 
  Col} from 'react-bootstrap';
import {Estabelecimento} from '../components';
import EstabelecimentoService from '../services/EstabelecimentoService';

class Cidade extends Component {
  state = {
    estabelecimentos: []
  };
  
  componentDidMount(){
    EstabelecimentoService.getEstabelecimentos({uid: this.props.cidade.uid})
      .then((estabelecimentos => this.setState({estabelecimentos})));
  }

  onClick = (estabelecimento) => {
    this.props.history.push(`/agendamento/${estabelecimento}`);
  }

  renderEstabelecimentos = () => {
    return this.state.estabelecimentos.map(estabelecimento => (
      <Col key={estabelecimento.uid}>
        <Estabelecimento estabelecimento={estabelecimento} handleClick={this.onClick}/>
      </Col>
    ))
  }

  render(){
    return (
      <Container>
          <Row>
            {this.renderEstabelecimentos()}
          </Row>
      </Container>);
  }
}

const mapStateToProps = (store) => ({
  cidade: store.cidade.cidadeSelecionada
});

const ConnectedComponent = connect(mapStateToProps, null)(Cidade);
export {ConnectedComponent as default, Cidade};