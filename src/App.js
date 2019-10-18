import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage, BattlesIceCream, ColourMagazine } from './Pages'

function App() {
  return (
    <Router>
      <Switch>
        {/*  Route to Home Page */}
        <Route exact path='/' component={HomePage} />

        {/*  Route to Battles Ice Cream */}
        <Route path='/battles' component={BattlesIceCream} />

        {/* Route to Colour Magazine */}
        <Route path='/colour' component={ColourMagazine} />
      </Switch>
    </Router>
  )
}

export default App
