import * as Types from '../types/CidadeTypes';

const initialState = {
  cidadeSelecionada: undefined
}

const handlerCidadeSelecionada = (state, action) => ({
  ...state,
  cidadeSelecionada: action.payload
});

const handlers = {
  [Types.CIDADE_SELECIONADA]: handlerCidadeSelecionada
};

const CidadeReducer = (state = initialState, action) => {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state;
};

export default CidadeReducer;