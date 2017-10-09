import * as React from 'react';
import './App.css';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import HelloContainer from './containers/HelloContainer';
import { Provider } from 'react-redux';

const logo = require('./logo.svg');

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'JavaScript',
});

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
          <HelloContainer/>
        </Provider>
      </div>
    );
  }
}

export default App;
