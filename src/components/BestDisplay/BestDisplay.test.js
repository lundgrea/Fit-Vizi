

import React from 'react';
import { shallow } from 'enzyme';
import { BestDisplay } from './BestDisplay';

describe('BestDisplay', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<BestDisplay 
      topOne={'averagePower'}
      topFive={'averagePower'} 
      topTen={'averagePower'} 
      topFifteen={'averagePower'} 
      topTwenty={'averagePower'}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});


