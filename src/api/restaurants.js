import axios from 'axios'

const massage = (restaurants) => {
  return restaurants.map(({ restaurant }) => ({
    id: restaurant.id,
    cuisines: restaurant.cuisines,
    name: restaurant.name,
    restaurantLocation: restaurant.location 
    })
  )
}

export const getRestaurant = (id) => 
  axios.get('https://developers.zomato.com/api/v2.1/restaurant', {
    headers: { 'user-key': process.env.REACT_APP_ZOMATOKEY },
    params: {
      res_id: id
    }
  }).then(({ data }) => data)

export const getRestaurantsByLocation = (lat, lon) =>
  axios.get('https://developers.zomato.com/api/v2.1/search', {
    headers: { 'user-key': process.env.REACT_APP_ZOMATOKEY },
    params: {
      lat,
      lon
    }
  })
  .then(({ data }) => massage(data.restaurants))