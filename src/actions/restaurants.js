import { 
  REQUEST_RESTAURANTS,
  RECEIVE_RESTAURANTS,
  ERROR_RESTAURANTS
} from './actionTypes'

import { getRestaurantsByLocation } from '../api/restaurants'

export const requestRestaurants = () => ({
  type: REQUEST_RESTAURANTS,
})

export const receiveRestaurants = (restaurants) => ({
  type: RECEIVE_RESTAURANTS,
  payload: restaurants,
})

export const errorRestaurants = (err) => ({
  type: ERROR_RESTAURANTS,
  payload: err,
})

export const fetchRestaurants = (latitude, longitude) => (dispatch) => {
  dispatch(requestRestaurants())
  getRestaurantsByLocation(latitude, longitude)
    .then((restaurants) => dispatch(receiveRestaurants(restaurants)))
    .catch((err) => dispatch(errorRestaurants(err)))
}
