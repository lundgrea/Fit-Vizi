

import React from 'react';
import { shallow } from 'enzyme';
import { GraphDisplay } from './GraphDisplay';

describe('GraphDisplay', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<GraphDisplay 
      workoutData={[]}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});