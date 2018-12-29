// import _ from 'lodash';
import { FETCH_HISTORY } from '../actions/types';

const INITIAL_STATE = {
  data: []
};

// export default function history (state = { data: []}, action) {
//     switch (action.type) {
//         case FETCH_HISTORY:
//             return { ...state, data:action.payload.data };
//         default:
//             return state;
//     }
// };
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_HISTORY:
    return { ...state,
      data: action.payload.data };
  default:
    return state;
  }
};
