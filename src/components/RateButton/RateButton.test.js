import React from 'react';
import RateButton from './RateButton';

test('should render the RateButton with the attribute title, selected, onClick', () => {
  const wrapper = shallow(<RateButton title selected onClick />);
  expect(wrapper).toMatchSnapshot();
});
