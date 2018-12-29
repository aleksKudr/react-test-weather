import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import AuthService from './components/auth/AuthService';

// import withAuth from './components/auth/withAuth';
import { connect } from 'react-redux';
import Weather from './components/weather/weather';
import { getToken } from './utils/functions';
import { logout } from './actions/userAction';
// import {
//   Navbar,
//   Nav,
//   NavItem,
//   NavLink
// } from 'reactstrap';

// const Auth = new AuthService();


class App extends Component {
  componentWillMount() {
    if (!getToken()) { this.props.history.replace('/login'); }
  }

  handleLogout() {
    this.props.logout();
    this.props.history.replace('/login');
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
  }


  render() {
    return (
      <div className="App">

        <button
          type="button"
          className="form-submit"
          onClick={this.handleLogout.bind(this)}
        >
Logout

        </button>
        <Weather />

      </div>
    );
  }
}

// export default withAuth(App);
export default connect(
  null,
  { logout }
)(App);
