import initialState from './initialState'
import { REQUEST_RESTAURANTS, RECEIVE_RESTAURANTS } from '../actions/actionTypes'

export default (state = initialState.restaurants, action) => {
  switch(action.type) {
    case REQUEST_RESTAURANTS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_RESTAURANTS:
    return {
      ...state,
      isFetching: false,
      data: action.payload
    }
    default:
      return state
  }
}