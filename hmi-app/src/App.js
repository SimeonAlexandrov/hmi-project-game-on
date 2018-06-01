import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import HomePage from './components/HomePage/HomePage'
import ClubsPage from './components/ClubsPage/ClubsPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/clubs' component={ClubsPage}/>
        <Route exact path='/create' component={HomePage}/>
        <Route exact path='/profile' component={HomePage}/>
      </Switch>
    );
  }
}

export default App;
