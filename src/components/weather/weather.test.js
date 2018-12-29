import React from 'react';
import { NavLink } from 'reactstrap';
import SearchBar from './components/SearchBar';
import CityList from './components/CityList';


it('test link history', () => {
  const wrapper = shallow(
    <NavLink href="/history" />
  );

  //   let tree = component.toJSON();
  expect(wrapper).toMatchSnapshot();
});

it('test searchbar', () => {
  const wrapper = shallow(
    <SearchBar onSubmit={jest.fn()} />
  );

  //   let tree = component.toJSON();
  expect(wrapper).toMatchSnapshot();
});

it('test CityList', () => {
  const city = [{
    dt: 1545750000,
    main: {
      temp: 270.3,
      temp_min: 270.3,
      temp_max: 272.063,
      pressure: 1011.23,
      sea_level: 1019.38,
      grnd_level: 1011.23,
      humidity: 95,
      temp_kf: -1.76
    },
    weather: [{
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01n'
    }],
    clouds: {
      all: 80
    },
    wind: {
      speed: 9.02,
      deg: 225.004
    },
    rain: {},
    snow: {
      '3h': 0.001
    },
    sys: {
      pod: 'n'
    },
    dt_txt: '2018-12-25 15:00:00'
  },
  {
    dt: 1545760800,
    main: {
      temp: 269.97,
      temp_min: 269.97,
      temp_max: 271.297,
      pressure: 1012.44,
      sea_level: 1020.58,
      grnd_level: 1012.44,
      humidity: 88,
      temp_kf: -1.32
    },
    weather: [{
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01n'
    }],
    clouds: {
      all: 80
    },
    wind: {
      speed: 9.11,
      deg: 227.514
    },
    rain: {},
    snow: {
      '3h': 0.0185
    },
    sys: {
      pod: 'n'
    },
    dt_txt: '2018-12-25 18:00:00'
  },
  {
    dt: 1545771600,
    main: {
      temp: 270.19,
      temp_min: 270.19,
      temp_max: 271.075,
      pressure: 1013.07,
      sea_level: 1021.23,
      grnd_level: 1013.07,
      humidity: 90,
      temp_kf: -0.88
    },
    weather: [{
      id: 600,
      main: 'Snow',
      description: 'light snow',
      icon: '13n'
    }],
    clouds: {
      all: 80
    },
    wind: {
      speed: 9.26,
      deg: 229.5
    },
    rain: {},
    snow: {
      '3h': 0.049
    },
    sys: {
      pod: 'n'
    },
    dt_txt: '2018-12-25 21:00:00'
  }];
  const wrapper = shallow(
    <CityList
      city={city}
    />
  );

  //   let tree = component.toJSON();
  expect(wrapper).toMatchSnapshot();
});
