import React, { Component } from 'react';
import styled from 'styled-components';
import img from './img/home.jpg';
import {Button} from 'react-bootstrap';

const StyledContent = styled.div`
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    height: 93.3vh;
    display: flex;
    align-items: center;
    
`;

const StyledButton = styled(Button)`
  margin-left: 100px;
  width: 10%;
`;

class Home extends Component {

  render() {
    return (
      <StyledContent>
         <StyledButton variant="primary" size="lg">Selecionar</StyledButton>
      </StyledContent>
    );
  }
}

export default Home;