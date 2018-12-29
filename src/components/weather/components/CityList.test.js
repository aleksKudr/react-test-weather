import React from 'react';
import CityCard from './CityCard';
import CityList from './CityList';
import {
  findByTestAttr, checkProps
} from '../../../../test/testUntils';

const defaultProps = {
  city: [{ 0: 'test' }]
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps,
    ...props };
  return shallow(<CityList {...setupProps} />);
};

// it('does not throw warning with expected props', () => {
//   checkProps(CityList, defaultProps);
// });

it('test div', () => {
  const wrapper = shallow(
    <CityCard
      key={jest.fn()}
      name={jest.fn()}
    />
  );

  //   let tree = component.toJSON();
  expect(wrapper).toMatchSnapshot();
});
describe('props attack', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ city: [] });
  });
  it('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(0);
  });
  it('renders without error', () => {
    const instructions = findByTestAttr(wrapper, 'component-div');
    expect(instructions.text().length).not.toBe(0);
  });
});
describe('if there are words guessed', () => {
  let wrapper;
  const city = [
    { 0: 'train' }, { 1: 'agile' }, { 2: 'party' },
  ];
  beforeEach(() => {
    wrapper = setup({ city });
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
});
