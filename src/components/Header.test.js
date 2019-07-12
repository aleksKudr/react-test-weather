import React from 'react';
import { NavLink } from 'reactstrap';

it('test link login', () => {
  const wrapper = shallow(
    <NavLink href="/login" />
  );

  expect(wrapper).toMatchSnapshot();
});

it('test link regist', () => {
  const wrapper = shallow(
    <NavLink href="/regist" />
  );

  expect(wrapper).toMatchSnapshot();
});
