import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from './store'
import Home from './views/Home'
import Login from './views/Login'
import Restaurant from './views/Restaurant'

import './App.css'

const store = configureStore()

function App () {
  return <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/restaurant/:id'
          render={(routerProps) => <Restaurant { ...routerProps } />} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  </Provider>
}

export default App
