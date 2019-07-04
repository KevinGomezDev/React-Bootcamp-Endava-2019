import { INC, DEC } from '../actions/actionTypes'

export default (state={number: 0}, action) => {
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