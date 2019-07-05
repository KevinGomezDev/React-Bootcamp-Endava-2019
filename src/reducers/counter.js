import { INC, DEC } from '../actions/actionTypes'
import initialState from './initialState'

export default (state = initialState.counter, action) => {
  switch(action.type) {
    case INC: 
    return {
      ...state,
      number: state.number + 1,
    }
    case DEC :
      return {
        ...state,
        number: state.number - 1
      }
    default: 
    return state
  }
}