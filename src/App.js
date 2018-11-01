import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import AuthService from './services/AuthService';
import createStore from './createStore';
import { Home, Menu, Cidade, AgendamentoWizard, NotFound } from './pages';
import { usuarioLogin, usuarioLogout } from './state/actions/UsuarioActions';

import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

const store = createStore({});

class App extends Component {
  componentDidMount() {
    AuthService.onAuthChange((authUser) => {
      if (authUser) {
        store.dispatch(usuarioLogin(authUser));
      }
      else {
        store.dispatch(usuarioLogout());
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <React.Fragment>
            <Menu />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/cidade/:id" exact component={Cidade} />
              <Route path="/agendamento/:id" exact component={AgendamentoWizard} />
              <Route component={NotFound} />
            </Switch>
          </React.Fragment>
        </Provider>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
