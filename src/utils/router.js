import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from '../pages/landing'
import WorkInProgress from '../pages/wip'


export default function Router() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/wip" render={() => <WorkInProgress />} />
          </Switch>
      </BrowserRouter>
    )
  }