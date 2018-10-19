import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Field from '../Field';

it('should render app', () => {
  const wrapper = shallow(<Field id='1' label='Label' help='Help'/>);
    
  expect(toJson(wrapper)).toMatchSnapshot();
});