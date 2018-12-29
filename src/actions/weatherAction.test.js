import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import React from 'react';
import moxios from 'moxios';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  FETCH_WEATHER,
  CREATE_WEATHER
} from './types';
import { instance } from '../utils/axios';
import reducers from '../reducers';
import { getWeather } from './weatherAction.js';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let mockAxios;
let store;
let body;
const KEY = '36e48c55215089bf93e20c56ac459509';
// const expectedActions = [{payload: {config: {data: undefined, headers: {Accept: "application/json, text/plain, */*"}, maxContentLength: -1, method: "get", params: {apiKey: "36e48c55215089bf93e20c56ac459509", q: "Taganrog"}, timeout: 0, transformRequest: {0: [Function transformRequest]}, transformResponse: {0: [Function transformResponse]}, url: "http://api.openweathermap.org/data/2.5/forecast", validateStatus: [Function validateStatus], xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN"}, data: undefined, headers: undefined, status: 200}, type: "FETCH_WEATHER"}]
beforeEach(() => {
  mockAxios = new MockAdapter(axios);
  store = mockStore({});
  body = {
    city: 'Taganrog'
  };
});

afterEach(() => {
  mockAxios.restore();
});
it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', async () => {
  mockAxios.onGet('http://api.openweathermap.org/data/2.5/forecast', {}).reply(200);
  return store.dispatch(getWeather(body))
    .then(() => {
      console.log('store.getActions()', store.getActions());
      expect(store.getActions()[0].payload.status).toEqual(200);
    });
});
