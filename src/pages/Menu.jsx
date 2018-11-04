import { connect } from 'react-redux';
import React, {Component} from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {usuarioLogin, usuarioLogout} from '../state/actions/UsuarioActions';

class Menu extends Component {
  renderLogin = () => {
    const {usuarioLogado, usuarioLogin, usuarioLogout} = this.props;
    
    const logado = usuarioLogado !== undefined;
    return logado ? (<Button variant="danger" onClick={usuarioLogout}>Sair</Button>)
    : <Button variant="success" onClick={usuarioLogin}>Login</Button>;
  }

  render(){
    return (
      <Navbar bg="primary" variant="dark">
        <Nav className="mr-auto">
          <NavLink to="/" className="navbar-brand">PetMonday</NavLink>
          {this.props.cidade ? <NavLink to="/cidade" className="navbar-brand">Agendamento</NavLink> : null}
          
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
  usuarioLogado: store.usuario.usuarioLogado,
  cidade: store.cidade.cidadeSelecionada
})

const ConnectedComponent = connect(mapStateToProps, {usuarioLogin, usuarioLogout})(Menu);
export {ConnectedComponent as default, Menu};