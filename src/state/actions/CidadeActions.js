import * as Types from '../types/CidadeTypes';

const selecionarCidade = (cidade) => dispatch => dispatch({type: Types.CIDADE_SELECIONADA, payload: cidade});

export {
  selecionarCidade
}