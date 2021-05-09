import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/home'
import WorkInProgress from '../pages/wip'
import StrategyBuilder from '../pages/builder'

export default function Router() {
    return (
      <BrowserRouter>
          <Switch>   
            <Route exact path="/" component={Home} />
            <Route exact path="/wip" render={() => <WorkInProgress />} />
            <Route exact path="/strategies" component={StrategyBuilder} />
          </Switch>
      </BrowserRouter>
    )
  }