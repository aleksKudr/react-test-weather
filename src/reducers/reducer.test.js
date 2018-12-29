import expect from 'expect';
import userReducer from './userReducer';
import historyReducer from './historyReducer';
import weatherReducer from './weatherReducer';
// import {login, regist} from '../actions/userAction';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_USER,
  FETCH_HISTORY,
  FETCH_WEATHER
} from '../actions/types';
// import getPostMock from '../mocks/getPostMock';

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(
      {
        username: null,
        password: null
      }
    );
  });

  it('should handle SIGN_IN', () => {
    expect(
      userReducer([], {
        type: SIGN_IN,
        payload: {
          username: 'adm',
          password: null
        }
      })
    ).toEqual(
      {
        username: 'adm',
        password: null
      }
    );
    expect(
      userReducer([], {
        type: SIGN_IN,
        payload: {
          username: null,
          password: 'adm'
        }
      })
    ).toEqual(
      {
        username: null,
        password: 'adm'
      }
    );
  });


  it('should handle CREATE_USER', () => {
    expect(
      userReducer([], {
        type: CREATE_USER,
        payload: {
          username: 'adm',
          password: null
        }
      })
    ).toEqual(
      {
        username: 'adm',
        password: null
      }
    );
    expect(
      userReducer([], {
        type: CREATE_USER,
        payload: {
          username: null,
          password: 'adm'
        }
      })
    ).toEqual(
      {
        username: null,
        password: 'adm'
      }
    );
  });


  it('should handle SIGN_OUT', () => {
    expect(
      userReducer([], {
        type: SIGN_OUT,
        payload: {
          username: 'adm',
          password: 'adm'
        }
      })
    ).toEqual(
      {
        username: '',
        password: ''
      }
    );
    expect(
      userReducer([], {
        type: SIGN_OUT,
        payload: {
          username: null,
          password: 'adm'
        }
      })
    ).toEqual(
      {
        username: '',
        password: ''
      }
    );
  });
});


describe('history reducer', () => {
  it('should return the initial state', () => {
    expect(historyReducer(undefined, {})).toEqual(
      {
        data: []
      }
    );
  });

  it('history', () => {
    const response = {
      data: [
        'test'
      ]
    };
    expect(
      historyReducer([], {
        type: FETCH_HISTORY,
        payload: response
      })
    ).toEqual(
      response

    );
  });
  it('history', () => {
    const response = {
      data: []
    };
    expect(
      historyReducer([], {
        type: FETCH_HISTORY,
        payload: response
      })
    ).toEqual(
      response

    );
  });
});

describe('weather reducer', () => {
  it('should return the initial state', () => {
    expect(weatherReducer(undefined, {})).toEqual(
      {
        code: null,
        list: [],
        city: [],
        cnt: null,
        message: null,
        createdAT: null,
      }
    );
  });

//     it('should handle FETCH_WEATHER', () => {
//       expect(
//         weatherReducer([], {
//           type: FETCH_WEATHER,
//           payload: {
//             code: null,
//             list: [],
//             city: [],
//             cnt: null,
//             message: '123',
//             createdAT: null,
//           }
//         })
//       ).toEqual(
//         {
//             code: null,
//             list: [],
//             city: [],
//             cnt: null,
//             message: '123',
//             createdAT: null,
//         }
//       )
//    })
});
