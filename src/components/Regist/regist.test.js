import React from 'react';

import Header from '../Header';
import RegistForm from './registForm';


it('test Header', () => {
  const wrapper = shallow(
    <Header />
  );

  //   let tree = component.toJSON();
  expect(wrapper).toMatchSnapshot();
});
it('test h3', () => {
  const wrapper = shallow(
    <h3 />
  );

  //   let tree = component.toJSON();
  expect(wrapper).toMatchSnapshot();
});
it('test RegistForm', () => {
  const wrapper = shallow(
    <RegistForm onSubmit={jest.fn()} />
  );

  //   let tree = component.toJSON();
  expect(wrapper).toMatchSnapshot();
});
