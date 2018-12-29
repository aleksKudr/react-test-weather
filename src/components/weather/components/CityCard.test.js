import React from 'react';
import CityCard from './CityCard';

const props = { name: { dt: 1546322400,
  main: { temp: 263.875,
    temp_min: 263.875,
    temp_max: 263.875,
    pressure: 1023.04,
    sea_level: 1031.42,
    grnd_level: 1023.04,
    humidity: 76,
    temp_kf: 0 },
  weather: [{ id: 600,
    main: 'Snow',
    description: 'light snow',
    icon: '13d' }],
  clouds: { all: 32 },
  wind: { speed: 1.71,
    deg: 234.501 },
  snow: { '3h': 0.069999999999999 },
  sys: { pod: 'd' },
  dt_txt: '2019-01-01 06:00:00' } };

const component = shallow(
  <CityCard {...props} />
);

it('test snapshot', () => {
  expect(component).toMatchSnapshot();
});
