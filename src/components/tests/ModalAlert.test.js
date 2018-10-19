import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ModalAlert from '../ModalAlert';

it('should render app', () => {
  const wrapper = shallow(<ModalAlert show={true} title='ModalAlert' subTitle='Sub Título' content='Teste'/>);
    
  expect(toJson(wrapper)).toMatchSnapshot();
});