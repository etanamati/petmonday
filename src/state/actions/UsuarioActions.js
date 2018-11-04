import UserService from '../../services/UserService';
import AuthService from '../../services/AuthService';
import * as Types from '../types/UsuarioTypes';

const usuarioLogin = () => dispatch => {
  return AuthService.loginWithGoogle()
    .then((retorno) => UserService.getUserData(retorno.uid))
    .then((usuario => {
      dispatch({
        type: Types.USUARIO_LOGIN,
        payload: usuario
      })
    }));
}

const usuarioLogout = () => dispatch => {
  return AuthService.logout()
    .then(() => dispatch({ type: Types.USUARIO_LOGOUT }));
};

export {
  usuarioLogin,
  usuarioLogout
}