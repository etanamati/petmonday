import React, { Component } from 'react';
import styled from 'styled-components';
import img from './img/home.jpg';
import { Button, Form, Col } from 'react-bootstrap';

const StyledContent = styled.div`
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    height: 93.3vh;
    display: flex;
    align-items: center;
    
`;

const StyledForm = styled(Form)`
  margin-left: 100px;
  width: 25%;
`;

class Home extends Component {

  render() {
    return (
      <StyledContent>
        <StyledForm>
          <Form.Row>
            <Col>
              <Form.Control as="select">
                <option>Escolha sua cidade</option>
                <option>...</option>
              </Form.Control>
            </Col>
            <Col>
              <Button variant="primary" type="submit">
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