import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

test('should render the Button correctly', () => {
  const wrapper = shallow(<Button />);
  expect(wrapper).toMatchSnapshot();
});

test('should render the Button with the attribute primary', () => {
    const wrapper = shallow(<Button primary/>);
    expect(wrapper).toMatchSnapshot();
});
