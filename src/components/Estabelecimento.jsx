import React from 'react';
import {Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap';

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
          </ListGroup>
          <Card.Body>
            <Button variant="primary" onClick={() => handleClick(estabelecimento.uid)}>Selecione</Button>
          </Card.Body>
        </Card>
  );
}

export default Estabelecimento;