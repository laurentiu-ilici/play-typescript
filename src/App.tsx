import * as React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import './App.css';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import OverviewContainer from './containers/OverviewContainer';
import InfoContainer from './containers/InfoContainer';
import Header from './components/header/Header';

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
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and load to reload.
        </p>
        <Provider store={store}>
          <Router history={history} >
            <Route path="/" component={Header}>
              <Route path="/info" component={InfoContainer}/>
              <Route path="/overview" component={OverviewContainer}/>
            </Route>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
