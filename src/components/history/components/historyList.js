import React from 'react';
import HistoryCard from './historycard';

const HistoryList = (props) => {
  // console.log('props.listHistory', JSON.stringify(props.listHistory[0]));
  if (!props.listHistory[0] || props.listHistory === undefined || props.listHistory === [] || props.listHistory === {}) {
    return <p />;
  } return (
    <div>
      {props.listHistory.map(list => (
        <HistoryCard
          key={list.createdAt}
          name={list}
        />
      ))
      }
    </div>
  );
};

export default HistoryList;
