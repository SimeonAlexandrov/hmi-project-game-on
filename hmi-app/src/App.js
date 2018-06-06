import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import HomePage from './components/HomePage/HomePage'
import ClubsPage from './components/ClubsPage/ClubsPage';
import CreatePage from './components/CreatePage/CreatePage';
import ProfilePage from './components/ProfilePage/ProfilePage';
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/clubs' component={ClubsPage}/>
        <Route exact path='/create' component={CreatePage}/>
        <Route exact path='/profile' component={ProfilePage}/>
      </Switch>
    );
  }
}

export default App;
