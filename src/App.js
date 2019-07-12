import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Weather from './components/weather/weather';
import { getToken } from './utils/functions';
import { logout } from './actions/userAction';


class App extends Component {
  componentWillMount() {
    // eslint-disable-next-line react/prop-types
    const { history } = this.props;
    if (!getToken()) {
      history.replace('/login');
    }
  }

  handleLogout() {
    const {
      // eslint-disable-next-line react/prop-types
      logoutA,
      history
    } = this.props;
    logoutA();
    history.replace('/login');
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

export default connect(
  null,
  { logoutA: logout }
)(App);
