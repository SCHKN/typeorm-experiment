import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home'
import SignUp from './auth/SignUp'

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    )
  }
}
