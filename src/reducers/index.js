import { combineReducers } from 'redux'
import counter from './counter'
import user from './user'
import restaurants from './restaurants'

export default combineReducers({ 
  counter,
  user,
  restaurants,
})