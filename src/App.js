import React from 'react';
import Home from './views/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Restaurant from './views/Restaurant'

function App () {
  return <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/restaurant/:id'
          render={(routerProps) => <Restaurant { ...routerProps } />} />
      </Switch>
    </Router>
}

export default App;
