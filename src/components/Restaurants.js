import React from 'react'
import { getRestaurantsByLocation } from '../api/restaurants'
import Restaurant from './Restaurant'

class Restaurants extends React.Component {
  state = {
    restaurants: [],
    favouriteRestaurants: [],
    loading: false,
    error: null
  }

  toggleFavourite = (id) => {
    const { favouriteRestaurants } = this.state
    if(favouriteRestaurants.includes(id)) {
      const filteredRestaurants = favouriteRestaurants.filter((restaurantId) => restaurantId !== id)
      this.setState({ favouriteRestaurants: filteredRestaurants })
    } else {
      const newFavourites = [...this.state.favouriteRestaurants, id]
      this.setState({ favouriteRestaurants: newFavourites })
      /* 
      --- Alternative way to define a new favourite using Array.push ---
        const newFavourites = this.state.favouriteRestaurants
        newFavourites.push(id)
      */
    }
  }

  componentDidMount () {
    const { latitude, longitude } = this.props
    if(latitude && longitude) {
      this.setState(
        { loading: true },
        () => getRestaurantsByLocation(latitude, longitude)
          .then((restaurants) => this.setState({ restaurants, loading: false }))
          .catch((err) => this.setState({ error: err }))
      )
    }
  }

  render() {
    const { loading, error, favouriteRestaurants, restaurants } = this.state
    return <React.Fragment>
      {loading 
        && <div className='loader'>
          <i className="fas fa-spinner fa-pulse"></i>
        </div>
      }
      {(restaurants.length > 0)
        && restaurants.map((restaurant) =>
          <Restaurant
            {...restaurant}
            key={restaurant.id}
            isFavourite={favouriteRestaurants.includes(restaurant.id)}
            toggleFavourite={this.toggleFavourite}
          />)
      }
      {error && <div>{error}</div>}
    </React.Fragment>
  }
}

export default Restaurants
