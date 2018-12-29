import React from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchBar from './components/SearchBar';
import CityList from './components/CityList';
// import {createHistory , getWeather} from '../../utils/axios';
// import HistoryWeather from './components/historyWeather';
import {
  getWeather, createHistory
} from '../../actions/weatherAction';
// import {getHistory} from '../../actions/historyAction';


class Weather extends React.PureComponent {
  // state = { city: [], data: '', history: false };
  // constructor() {
  //   super();
  // this.Auth = new AuthService();
  // this.onTermSubmit();
  // }

  // handleHistory(){
  //   this.props.history.replace('./history');
  // }
  onSubmit = (formValues) => {
    console.log('formValues', formValues);
    return this.props.getWeather(formValues)
      .then(() => { this.props.createHistory(this.props.weather); });
    // .then(()=>this.props.getHistory())
  };


  // onTermSubmit = async (term) => {
  //   const response = await getWeather('/forecast', term );

  //   this.setState({
  //     city: response.data.list,
  //   });
  //   console.log(this.state.city)
  //   createHistory(response.data)
  //     .then(res => {
  //         console.log('jhtp[f',this.state.city);
  //         this.setState({
  //           data: res.data.data,
  //         });
  //     })
  //     .catch(err => {
  //         alert(err);
  //     })

  // };


  render() {
    return (
      <div>
       Hello!
        {' '}
        {this.props.user.username}
        <SearchBar
        // onFormSubmit={this.onTermSubmit}
          onSubmit={this.onSubmit}
        />
        <NavLink href="/history">History</NavLink>
        <div>
          <div>
            <div>
              {/* {this.state.data} */}
              {/* {this.props.weather} */}
              <CityList
                city={this.props.weather.list}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Weather.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  weather: PropTypes.shape(
    {
      list: PropTypes.array,
      city: PropTypes.array
    }
  ).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  weather: state.weather

});


export default connect(mapStateToProps, { getWeather,
  createHistory })(Weather);
