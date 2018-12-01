import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import TvShows from './components/tvshows';
import Detail from './components/detail';
import rootReducer from './redux/reducers';
import rootEpic from './redux/epics';

import './App.css';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);
epicMiddleware.run(rootEpic);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={TvShows} />
            <Route path="/detail/:id" component={Detail} />
          </Switch>
        </Router>

      </div>
      </Provider>
    );
  }
}

export default App;
