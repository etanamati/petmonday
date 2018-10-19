import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Estabelecimento from '../Estabelecimento';

it('should render app', () => {
  const estabelecimento = {nome: 'PetShop',
                            numero: '14',
                            telefone: '(44) 3030-7070',
                            endereco: 'Rua Teste',
                            servico: 'Banho e Tosa',
                          urlFoto: ''}
  const wrapper = shallow(<Estabelecimento estabelecimento={estabelecimento}/>);
    
  expect(toJson(wrapper)).toMatchSnapshot();
});