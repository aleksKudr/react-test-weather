import React from 'react';
import { Field } from 'redux-form';


it('test form', () => {
  const wrapper = shallow(
    <form
      onSubmit={jest.fn()}
      className="ui form error"
    />
  );

  //   let tree = component.toJSON();
  expect(wrapper).toMatchSnapshot();
});

it('test Field User', () => {
  const wrapper = shallow(
    <Field
      name="username"
      component={jest.fn()}
      label="Login"
    />
  );

  //   let tree = component.toJSON();
  expect(wrapper).toMatchSnapshot();
});

it('test Field Password', () => {
  const wrapper = shallow(
    <Field
      name="password"
      component={jest.fn()}
      label="Password"
    />
  );

  //   let tree = component.toJSON();
  expect(wrapper).toMatchSnapshot();
});
it('test label', () => {
  const wrapper = shallow(
    <label>
      {jest.fn()}
    </label>
  );

  //   let tree = component.toJSON();
  expect(wrapper).toMatchSnapshot();
});

it('test input', () => {
  const wrapper = shallow(
    <input
      {...jest.fn()}
      autoComplete="off"
    />
  );

  //   let tree = component.toJSON();
  expect(wrapper).toMatchSnapshot();
});

it('test input', () => {
  const wrapper = shallow(
    <button className="ui button primary">Submit</button>
  );

  //   let tree = component.toJSON();
  expect(wrapper).toMatchSnapshot();
});
