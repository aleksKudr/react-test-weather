import {
  setToken, getToken
} from './functions';

it('GET token', () => {
  const b = '1';
  setToken(b);
  const a = getToken();
  expect(a).toBe(b);
  const c = '-1';
  setToken(b);
  const d = getToken();
  expect(d).toBe(c);
  const ab = '0';
  setToken(b);
  const aa = getToken();
  expect(aa).toBe(ab);
});
