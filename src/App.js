import React from 'react'
import Home from './views/Home'
import Login from './views/Login'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Restaurant from './views/Restaurant'

function App () {
  return <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/restaurant/:id'
          render={(routerProps) => <Restaurant { ...routerProps } />} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
}

export default App
