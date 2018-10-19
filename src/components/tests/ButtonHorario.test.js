import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ButtonHorario from '../ButtonHorario';

it('should render app', () => {
  const hora = {status: 'disponivel', hora: '09:00'}
  const wrapper = shallow(<ButtonHorario hora={hora}/>);
    
  expect(toJson(wrapper)).toMatchSnapshot();
});