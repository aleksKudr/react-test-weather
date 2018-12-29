import React from 'react';
import configureStore from 'redux-mock-store';
import Header from '../Header';
import LoginForm from './LoginForm';
import { Login } from './Login';
import { login } from '../../actions/userAction';


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
    <LoginForm onSubmit={jest.fn()} />
  );

  //   let tree = component.toJSON();
  expect(wrapper).toMatchSnapshot();
});
// it('test RegistForm', () => {
//   const wrapper = shallow(
//     <Login login={login()} />
//   );
//   const spyOn = jest.spyOn(wrapper.instance(), 'onSubmit');
//   wrapper.instance().forceUpdate();
//   wrapper
//     .find(LoginForm)
//     .at(0)
//     .simulate('click');
//   expect(spyOn).toHaveBeenCalled();

//   //   let tree = component.toJSON();
//   // expect(wrapper).toMatchSnapshot();
// });
const setup = () => {
  const wrapper = shallow(<Login
    history={{ replace: jest.fn() }}
    login={jest.fn()}
  />);
  return wrapper;
};
const param = {
  username: 'adm',
  password: 'adm'
};

test('has access to `success` state', () => {
  const wrapper = setup();
  // console.log('wrapper.debug()', wrapper.debug());
  const spyOn = jest.spyOn(wrapper.instance(), 'onSubmit');
  wrapper.instance().forceUpdate();
  wrapper
    .find(LoginForm)
    // .childAt(0)
    .dive()
    .simulate('submit', param);

  expect(spyOn).toHaveBeenCalledWith(param);
  expect(wrapper.instance().props.login).toHaveBeenCalled();
  expect(wrapper.instance().props.login).toHaveBeenCalledWith(param);
});
