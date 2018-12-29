import React, { Component } from 'react';
import './Regist.css';
import { connect } from 'react-redux';
import { getToken } from '../../utils/functions';
import Header from '../Header';


import RegistForm from './registForm';

import { regist } from '../../actions/userAction';
// import registForm from './registForm';

class Regist extends Component {
  componentWillMount() {
    if (getToken()) { this.props.history.replace('/'); }
  }

    onSubmit = formValues => this.props.regist(formValues)
      .then(() => {
        if (getToken()) { this.props.history.replace('/'); }
      });

    render() {
      return (
        <div>
          <Header />
          <div className="center">
            <div className="card">
              <div>
                <h3>Registration</h3>
                <RegistForm onSubmit={this.onSubmit} />
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default connect(
  null,
  { regist }
)(Regist);


// import React, {
//     Component
// } from 'react';
// import './Regist.css';
// import {regist} from '../../utils/axios';
// import {getToken} from '../../utils/functions';
// import Header from '../Header';

// class Login extends Component {
//     constructor() {
//         super();
//         this.handleChange = this.handleChange.bind(this);
//         this.handleFormSubmit = this.handleFormSubmit.bind(this);
//         // this.Auth = new AuthService();
//     }
//     componentWillMount() {
//         if (getToken())
//             this.props.history.replace('/');
//     }
//     render() {
//         return (
//             <div>
//                 <Header/>
//             <div className="center">
//                 <div className="card">

//                     <h1>Regist</h1>
//                     <form onSubmit={this.handleFormSubmit}>
//                         <input
//                             className="form-item"
//                             placeholder="Username goes here..."
//                             name="username"
//                             type="text"
//                             onChange={this.handleChange}
//                         />
//                         <input
//                             className="form-item"
//                             placeholder="Password goes here..."
//                             name="password"
//                             type="password"
//                             onChange={this.handleChange}
//                         />
//                         <input
//                             className="form-submit"
//                             value="SUBMIT"
//                             type="submit"
//                         />
//                     </form>
//                 </div>
//             </div>
//             </div>
//         );
//     }

//     handleFormSubmit(e) {
//         e.preventDefault();

//         regist(this.state.username, this.state.password)
//             .then(res => {
//                 this.props.history.replace('/');
//             })
//             .catch(err => {
//                 console.log(err);
//                 alert(err);
//             })
//     }

//     handleChange(e) {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }
// }

// export default Login;
