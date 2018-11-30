import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TvShows from './components/tvshows';
import Header from './components/header';
import Detail from './components/detail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div >
        <Router>
          <Switch>
            <Route exact path="/" component={TvShows} />
            <Route path="/detail" component={Detail} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
