// import decode from 'jwt-decode';
import axios from 'axios';
import {
  getToken,
  // setToken
} from './functions';


export const instance = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: { Authorization: getToken() }
});


// export const login = (username, password) => {
//     // Get a token
//     // console.log(username,' ',password);
//     return instance.post(`login`, {
//       username: username,
//       password: password
//     }).then((res => {
//         // console.log(res);
//         setToken(res.data.token)
//         return res;
//     }))
// }

// export const regist = (username, password) => {
//   // Get a token
//   return instance.post(`/regist`, {
//       username: username,
//       password: password
//   }).then((res => {
//       // console.log(res);
//       setToken(res.data.token)
//       return res;
//   }));
// }

// export const createHistory = (data) => {
//   // Get a token
//   return instance.post(`/history`, {
//       data: data
//   }).then((res => {
//       console.log(res);
//       return res;
//   }))
// };

// export const getHistory = (data) => {
//   // Get a token
//   return instance.get(`/history`)
//     .then((res => {
//       // console.log(res);
//       return res;
//   }))
// };

// export const getWeather = (path, term) => {
//   const KEY="36e48c55215089bf93e20c56ac459509";
//   return axios.get(`http://api.openweathermap.org/data/2.5${path}`, {
//     params: {
//       apiKey: KEY,
//       q: term
//     }
//   })
// }
