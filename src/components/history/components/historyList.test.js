import React from 'react';
import HistoryCard from './historycard';
import HistoryList from './historyList';

const props = { listHistory: jest.fn() };

const component = shallow(
  <HistoryList {...props} />
);
it('test matchsnapshot', () => {
  expect(component).toMatchSnapshot();
  expect(component.find('p').exists()).toBe(true);
});
