import React from 'react';


// import renderer from 'react-test-renderer';
import { NavLink } from 'reactstrap';


it('test link login', () => {
  const wrapper = shallow(
    <NavLink href="/login" />
  );

  //   let tree = component.toJSON();
  expect(wrapper).toMatchSnapshot();
});
it('test link regist', () => {
  const wrapper = shallow(
    <NavLink href="/regist" />
  );

  //   let tree = component.toJSON();
  expect(wrapper).toMatchSnapshot();
});
