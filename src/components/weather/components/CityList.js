import React from 'react';
import PropTypes from 'prop-types';
import CityCard from './CityCard';

// props.city[0].map((city,index) => console.log(city));
// console.log('city',props.city)
// props.city.map((city,index) => console.log('city', city))
const CityList = (props) => {
  if (!props.city[0]) {
    return (
      <div>
        <div data-test="component-div">Load</div>
      </div>
    );
  }

  return (
    <div data-test="component-guessed-words">
      {props.city.map((city, index) => (
        <CityCard
          key={index}
          name={city}
        />
      ))
      }
    </div>
  );
};
CityList.propTypes = {
  city: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default CityList;
