import React, {
  PureComponent } from 'react';
import './Login.css';
import { connect } from 'react-redux';
import { getToken } from '../../utils/functions';
import Header from '../Header';
import { login } from '../../actions/userAction';
import LoginForm from './LoginForm';


export class Login extends PureComponent {
  componentWillMount() {
    if (getToken())
    { this.props.history.replace('/'); }
  }

  onSubmit = async (formValues) => {
    console.log('this.props', this.props);
    await this.props.login(formValues);

    if (getToken()) {
      this.props.history.replace('/');
    }

    // this.props.history.replace('/');

  }




  render() {
    return (
      <div>
        <Header />
        <div className="center">
          <div className="card">
            <div>
              <h3>Login</h3>
              <LoginForm onSubmit={this.onSubmit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);


// import Header from '../Header';
// import {login} from '../../utils/axios';

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
//         return (<div><Header/>
//             <div className="center">
//                 <div className="card">

//                     <h1>Login</h1>
//                     <form onSubmit={this.handleFormSubmit}>
//                         <input
//                             className="form-item"
//                             placeholder="Username goes here..."
//                             name="username"
//                             type="text"
//                             onChange={this.handleChange}
//                             />
//                         <input
//                             className="form-item"
//                             placeholder="Password goes here..."
//                             name="password"
//                             type="password"
//                             onChange={this.handleChange}
//                             />
//                         <input
//                             className="form-submit"
//                             value="SUBMIT"
//                             type="submit"
//                             />

//                     </form>
//                 </div>
//             </div>
//             </div>
//         );
//     }

//     handleFormSubmit(e) {
//         e.preventDefault();

//         login(this.state.username, this.state.password)
//             .then(res => {
//                 this.props.history.replace('/');
//             })
//             .catch(err => {
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
