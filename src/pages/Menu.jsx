import { connect } from 'react-redux';
import React, {Component} from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AuthService from '../services/AuthService';

class Menu extends Component {
  onLogin = () => {
    AuthService.loginWithGoogle();
  }

  onLogout = () => {
    AuthService.logout()
  };

  renderLogin = () => {
    const { usuarioLogado } = this.props;
    const logado = usuarioLogado !== undefined;
    return logado ? (<Button variant="danger" onClick={this.onLogout}>Sair</Button>)
    : <Button variant="success" onClick={this.onLogin}>Login</Button>;
  }

  render(){
    
    return (
      <Navbar bg="primary" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link to="/">PetMonday</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          {this.renderLogin()}
        </Nav>
      </Navbar>
    )
        }
}

Menu.propTypes = {
  usuarioLogado: PropTypes.object
}


const mapStateToProps = store => ({
  usuarioLogado: store.usuario.usuarioLogado
})

export default connect(mapStateToProps)(Menu);