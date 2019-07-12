import React from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchBar from './components/SearchBar';
import CityList from './components/CityList';
import {
  getWeather, createHistory
} from '../../actions/weatherAction';


class Weather extends React.PureComponent {
  onSubmit = formValues => this.props.getWeather(formValues)
    .then(() => { this.props.createHistory(this.props.weather); });

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
