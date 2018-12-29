import React from 'react';
import PropTypes from 'prop-types';
import CityList from '../../weather/components/CityList';

class HistoryCard extends React.PureComponent {
  render() {
    if (!this.props.name.city && !this.props.name.list) {
      return <div>Put button</div>;
    } return (
      <div>
        <p>
          <a
            className="btn btn-link"
            data-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            {this.props.name.city.name}
          </a>
        </p>
        <div
          className="collapse"
          id="collapseExample"
        >
          <CityList
            city={this.props.name.list}
          />
        </div>
      </div>

    );
  }
}
HistoryCard.propTypes = { name: PropTypes.shape(
  {
    list: PropTypes.array,
    city: PropTypes.object
  }
).isRequired, };

export default HistoryCard;
