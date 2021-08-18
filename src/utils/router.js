import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from '../pages/home'
import WorkInProgress from '../pages/wip'
import StrategyBuilder from '../pages/builder'

export default function Router() {
    return (
      <BrowserRouter>
          <Switch>   
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              exact
              path="/wip"
              render={() => {
                return <WorkInProgress />
              }}
            />
            <Route
              exact
              path="/project"
              render={() => {
                return <StrategyBuilder />
              }}
            />
            <Route render={() => <Redirect to='/wip' />} />
          </Switch>
      </BrowserRouter>
    )
  }