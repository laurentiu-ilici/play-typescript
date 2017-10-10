import * as React from 'react';
import * as enzyme from 'enzyme';
import Header from './Header';


it('renders the header', () => {
  const header = enzyme.shallow(<Header />);
  expect(header.find('.headerr').text()).toEqual('Welcome to The tax manager');
});