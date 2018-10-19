import React from 'react';
import {Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Estabelecimento = props => {
  const {estabelecimento, handleClick} = props;
  return (
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
            <ListGroupItem>Serviço: {estabelecimento.servico}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Button variant="primary" onClick={() => handleClick(estabelecimento.uid)}>Selecione</Button>
          </Card.Body>
        </Card>
  );
}

Estabelecimento.propTypes = {
  estabelecimento: PropTypes.object,
  handleClick: PropTypes.func
}

export default Estabelecimento;
