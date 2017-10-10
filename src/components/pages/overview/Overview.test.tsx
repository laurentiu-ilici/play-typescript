import * as React from 'react';
import * as enzyme from 'enzyme';
import Overview from './Overview';


it('renders the correct text when no enthusiasm level is given', () => {
  const overview = enzyme.shallow(<Overview name="Daniel" />);
  expect(overview.find('.greeting').text()).toEqual('Jesus Daniel!');
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const overview = enzyme.shallow(<Overview name="Daniel" enthusiasmLevel={1}/>);
  expect(overview.find('.greeting').text()).toEqual('Jesus Daniel!');
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const overview = enzyme.shallow(<Overview name="Daniel" enthusiasmLevel={5} />);
  expect(overview.find('.greeting').text()).toEqual('Jesus Daniel!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<Overview name="Daniel" enthusiasmLevel={0} />);
  }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Overview name="Daniel" enthusiasmLevel={-1} />);
  }).toThrow();
});