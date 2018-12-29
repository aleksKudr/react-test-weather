import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  Switch, Route, BrowserRouter as Router
} from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  createStore, applyMiddleware, compose
} from 'redux';
import reduxThunk from 'redux-thunk';
import App from './App';
import Regist from './components/Regist/regist';
import HistoryWeather from './components/history';
import Login from './components/Login/Login';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={App}
          />
          <Route
            exact
            path="/login"
            component={Login}
          />
          <Route
            exact
            path="/regist"
            component={Regist}
          />
          <Route
            exact
            path="/history"
            component={HistoryWeather}
          />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
