import * as Types from '../types/UsuarioTypes';

const initialState = {
  usuarioLogado: undefined
}

const handlerUsuarioLogin = (state, action) => ({
  ...state,
  usuarioLogado: action.payload
});

const handlerUsuarioLogout = (state, action) => ({
  ...state,
  usuarioLogado: initialState.usuarioLogado
});

const handlers = {
  [Types.USUARIO_LOGIN]: handlerUsuarioLogin,
  [Types.USUARIO_UPDATE]: handlerUsuarioLogin,
  [Types.USUARIO_LOGOUT]: handlerUsuarioLogout
};

const UsuarioReducer = (state = {}, action) => {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state;
};

export default UsuarioReducer;