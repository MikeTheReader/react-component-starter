import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import SimpleComponent from './SimpleComponent';

describe('SimpleComponent', function() {
  it('renders at all', function() {
      expect(function() {
        component = ReactTestUtils.renderIntoDocument(<SimpleComponent/>);
      }).not.toThrow();
  })
})
