import * as React from 'react';
import * as enzyme from 'enzyme';
import InfoPage from './Info';


it('renders the correct text when no enthusiasm level is given', () => {
  const info = enzyme.shallow(<InfoPage name="Daniel" />);
  expect(info.find('.greeting').text()).toEqual('Cristi Daniel!');
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const info = enzyme.shallow(<InfoPage name="Daniel" enthusiasmLevel={1}/>);
  expect(info.find('.greeting').text()).toEqual('Cristi Daniel!');
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const info = enzyme.shallow(<InfoPage name="Daniel" enthusiasmLevel={5} />);
  expect(info.find('.greeting').text()).toEqual('Cristi Daniel!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<InfoPage name="Daniel" enthusiasmLevel={0} />);
  }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<InfoPage name="Daniel" enthusiasmLevel={-1} />);
  }).toThrow();
});