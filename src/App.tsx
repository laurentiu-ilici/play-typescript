import * as React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import './App.css';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import HelloContainer from './containers/HelloContainer';

const logo = require('./logo.svg');

const reducers = combineReducers<StoreState>({
  enthusiasm,
  routing: routerReducer
});

const store = createStore(reducers);

const history = syncHistoryWithStore(browserHistory, store);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and load to reload.
        </p>
        <Provider store={store}>
          <Router history={history} >
            <Route path="/" component={HelloContainer}/>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
