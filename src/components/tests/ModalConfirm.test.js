import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ModalConfirm from '../ModalConfirm';

it('should render app', () => {
  const wrapper = shallow(<ModalConfirm show={true} title='ModalConfirm' subTitle='Sub Título' content='Teste'/>);
    
  expect(toJson(wrapper)).toMatchSnapshot();
});