import React, {Component} from 'react';
import {Card, 
  Button, 
  ListGroup, 
  ListGroupItem,
  Container,
  Row, 
  Col} from 'react-bootstrap';

class Cidade extends Component {
  state = {
    estabelecimentos: [
      { 
        id: '1',
        nome: 'PetShop',
        endereco: 'Rua teste',
        numero: 14,
        telefone: '(44) 3030-7070',
        urlFoto: 'https://s3.us-east-2.amazonaws.com/app-documento/background-business-clean-811101.jpg'
      },
      { 
        id: '2',
        nome: 'PetShop',
        endereco: 'Rua teste',
        numero: 14,
        telefone: '(44) 3030-7070',
        urlFoto: 'https://s3.us-east-2.amazonaws.com/app-documento/background-business-clean-811101.jpg'
      },
      { 
        id: '3',
        nome: 'PetShop',
        endereco: 'Rua teste',
        numero: 14,
        telefone: '(44) 3030-7070',
        urlFoto: 'https://s3.us-east-2.amazonaws.com/app-documento/background-business-clean-811101.jpg'
      },
      { 
        id: '4',
        nome: 'PetShop',
        endereco: 'Rua teste',
        numero: 14,
        telefone: '(44) 3030-7070',
        urlFoto: 'https://s3.us-east-2.amazonaws.com/app-documento/background-business-clean-811101.jpg'
      }
    ]
  };
  
  componentDidMount(){
    //this.props.match.params.id
  }

  onClick = (estabelecimento) => {
    this.props.history.push(`/agendamento/${estabelecimento}`);
  }

  renderEstabelecimentos = () => {
    return this.state.estabelecimentos.map(estabelecimento => (
      <Col key={estabelecimento.id}>
        <Card style={{ width: '20rem', marginTop: '50px' }}>
          <Card.Img variant="top" src={estabelecimento.urlFoto} />
          <Card.Body>
            <Card.Title>{estabelecimento.nome}</Card.Title>
            <Card.Text>
              {estabelecimento.endereco} - {estabelecimento.numero}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Telefone: {estabelecimento.telefone}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Button variant="primary" onClick={() => this.onClick(estabelecimento.id)}>Selecione</Button>
          </Card.Body>
        </Card>
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

export default Cidade;