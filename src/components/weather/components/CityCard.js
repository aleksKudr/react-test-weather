import React from 'react';

class CityCard extends React.PureComponent {
  render() {
    // console.log('this.props', JSON.stringify(this.props));
    if (this.props.name.main === undefined && this.props.weather === undefined) {
      return <div />;
    } return (


      <div className="row">
        <div className="col">
          {this.props.name.dt_txt}
        </div>
        <div className="col">
          {(((1.8 * (this.props.name.main.temp - 273) + 32) - 32) / 1.8).toFixed(2)}
        </div>
        <div className="col">
          {this.props.name.weather[0].main}
        </div>
      </div>
    );
  }
}

export default CityCard;
