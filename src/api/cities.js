import axios from 'axios'

export const getRestaurantsByLocation = (lat, lon) =>
  axios.get(`https://developers.zomato.com/api/v2.1/search`, {
    headers: { 'user-key': process.env.REACT_APP_ZOMATOKEY },
    params: {
      lat,
      lon
    }
  })
  .then(({ data }) => data )