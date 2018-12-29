import React from 'react';
// import { getHistory } from "../../utils/axios";
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import HistoryList from './components/historyList';
// import HistoryCard from './components/historycard';
import { getToken } from '../../utils/functions';

import { getHistory } from '../../actions/historyAction';
// const HistoryWeather = (props) => {
//    console.log(props.data)
//   console.log(props.num)
//   if (props.num){
//     return (
//       <div>
//         {props.data}
//       </div>
//     );} else return <div></div>
//   };

export class HistoryWeather extends React.PureComponent {
  // state = { listHistory : []}

  componentDidMount() {
    if (!getToken()) this.props.history.replace('/login');

    return this.props.getHistory()
      .then(() => console.log('this.props.listHistory', this.props.listHistory));

    // return getHistory()
    // .then((result) => {
    //   this.setState(
    //     {
    //       listHistory: result.data
    //     })
    //   console.log('ghbdtn',this.state.listHistory)
    //   return result.data
    // })
    // .then((result) =>{
    //   for (var key in result){
    //     console.log(result[key])

    //   }
    // })
  }

  // handleHistory() {
  //   return getHistory()
  //   .then((result) => {
  //     this.setState(
  //       {
  //         listHistory: result.data
  //       })
  //     console.log('ghbdtn',this.state.listHistory)
  //     return result.data
  //   })
  //   .then((result) =>{
  //     for (var key in result){
  //       console.log(result[key])

  //     }
  //   })
  // }


  render() {
    return (
      <div>
        <NavLink href="/">Home</NavLink>
        {/* <button type="button" className="form-submit" onClick={this.handleHistory.bind(this)}>History</button> */}
        <HistoryList listHistory={this.props.listHistory} />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  listHistory: state.history.data

});


export default connect(mapStateToProps, { getHistory })(HistoryWeather);
