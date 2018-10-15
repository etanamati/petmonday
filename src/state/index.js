import { combineReducers } from 'redux';
import UsuarioReducer from './reduces/UsuarioReducer'

const rootReducer = combineReducers({
  usuario: UsuarioReducer
})

export default rootReducer;