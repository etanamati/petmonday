import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import AuthService from './services/AuthService';
import createStore from './createStore';
import { Home, Login, Menu, Cidade, Agendamento } from './pages';
import { usuarioLogin, usuarioLogout } from './state/actions/UsuarioActions';
import moment from 'moment';
import 'moment/locale/pt-br';

import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

moment.locale('pt-BR');
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
              <Route path="/login" exact component={Login} />
              <Route path="/cidade/:id" exact component={Cidade} />
              <Route path="/agendamento/:id" exact component={Agendamento} />
            </Switch>
          </React.Fragment>
        </Provider>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
