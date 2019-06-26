import React from 'react';
import Layout from '../components/Layout';

const DEBUG_MODE = false

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude:  null,
      error: null,
      favouriteRestaurants: [],
    }
    if(DEBUG_MODE) {
      console.log('constructor')
    }
  }

  static getDerivedStateFromProps(props, state) {
    /*if(state.latitude === 35.689487) {
      return {
        favouriteRestaurants: [1],
      }
    }*/
    return null
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if(this.state.favouriteRestaurants !== prevState.favouriteRestaurants) {
      return 'Son diferentes'
    }
    return null
  }

  toggleFavourite = (id) => {
    const { favouriteRestaurants } = this.state
    if(favouriteRestaurants.includes(id)) {
      const filteredRestaurants = favouriteRestaurants.filter((restaurantId) => restaurantId !== id)
      this.setState({ favouriteRestaurants: filteredRestaurants })
    } else {
      /*const newFavourites = this.state.favouriteRestaurants
      newFavourites.push(id)*/
      const newFavourites = [...this.state.favouriteRestaurants, id]
      this.setState({ favouriteRestaurants: newFavourites })
    }
  }

  componentDidMount() {
    if (DEBUG_MODE) {
      console.log('componentDidMount')
    }
    window.navigator.geolocation.getCurrentPosition((location) => {
      window.componentPosition = { 
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
       }
      this.setState({ 
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
       })
    }, (error) => this.setState({ error: error.message }))
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (DEBUG_MODE) {
      console.log('componentDidUpdate')
      console.log(snapshot)
    }
    window.document.title = `latitude: ${this.state.latitude}`
  }

  componentWillUnmount () {
    window.componentPosition = undefined
  }

  render () {
    if (DEBUG_MODE) {
      console.log('render')
    }
    const { latitude, longitude, error, favouriteRestaurants } = this.state
    return (!error)
     ? <Layout 
      latitude={latitude}
      longitude={longitude}
      favouriteRestaurants={favouriteRestaurants} 
      toggleFavourite={this.toggleFavourite} />
     : <div>{error}</div>
  }
}

export default Home