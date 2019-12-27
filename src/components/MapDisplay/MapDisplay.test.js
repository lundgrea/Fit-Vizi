

import React from 'react';
import { shallow } from 'enzyme';
import { MapDisplay } from './MapDisplay';

describe('MapDisplay', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<MapDisplay 
      workoutData={[]}
      selectedItem={'positionLat', 'positionLong'}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});