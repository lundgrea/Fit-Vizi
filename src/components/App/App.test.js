

import React from 'react';
import { shallow, mount } from 'enzyme';
import { App } from './App';

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});