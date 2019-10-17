import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage, BattlesIceCream } from './Pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/battles' component={BattlesIceCream} />
      </Switch>
    </Router>
  )
}

export default App
