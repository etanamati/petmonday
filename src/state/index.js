import { combineReducers } from 'redux';
import CidadeReducer from './reduces/CidadeReducer';
import UsuarioReducer from './reduces/UsuarioReducer';

const rootReducer = combineReducers({
  usuario: UsuarioReducer,
  cidade: CidadeReducer
})

export default rootReducer;