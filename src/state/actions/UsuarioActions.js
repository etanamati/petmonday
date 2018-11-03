import UserService from '../../services/UserService';
import * as Types from '../types/UsuarioTypes';

const usuarioLogin = (usuario) => dispatch => {
  return UserService.getUserData(usuario.uid)
    .then((usuarioAtualizado) => {
      dispatch ({
        type: Types.USUARIO_LOGIN,
        payload: usuarioAtualizado
      })
    });
}

const usuarioLogout = () => dispatch => dispatch({type: Types.USUARIO_LOGOUT});

export {
  usuarioLogin,
  usuarioLogout
}