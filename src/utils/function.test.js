import React from 'react';
import {
  setToken, getToken
} from './functions';

it('GET token', () => {
  var b = '1';
  setToken(b);
  var a = getToken();
  expect(a).toBe(b);
  var b = '-1';
  setToken(b);
  var a = getToken();
  expect(a).toBe(b);
  var b = '0';
  setToken(b);
  var a = getToken();
  expect(a).toBe(b);
});
