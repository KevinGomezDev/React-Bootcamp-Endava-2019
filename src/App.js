import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Home from './views/Home'
import Login from './views/Login'
import Restaurant from './views/Restaurant'

import './App.css'

const rootReducer = (state = { counter: 0 }, action) => {
  switch(action.type) {
    case 'INC': 
    return {
      ...state,
      counter: state.counter + 1,
    }
    default: 
    return state
  }
}

const store = createStore(rootReducer, { counter: 0 }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App () {
  console.log(store.getState().counter)
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
