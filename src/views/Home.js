import React from 'react'
import Layout from '../components/Layout'
import { getCategories } from '../api/categories'

const DEBUG_MODE = false

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude:  null,
      error: null,
      categories: [],
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
  
  getGeolocation () {
    const setLocation = (position) => {
      const { latitude, longitude } = position.coords
      if(latitude && longitude) {
        // Adding userPosition to Window to execute ComponentWillUnmount Example
        window.componentPosition = { latitude, longitude }
        this.setState(() => ({ latitude, longitude }))
      }
    }
    const setLocationError = (error) => this.setState({ error: error.message })
    //Get User Location from browser Geolocation sensor
    window.navigator.geolocation.getCurrentPosition(setLocation, setLocationError)
  }

  componentDidMount() {
    if (DEBUG_MODE) {
      console.log('componentDidMount')
    }
    this.getGeolocation()
    getCategories().then((categories) => this.setState({ categories }))
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
    const { categories, latitude, longitude, error } = this.state
    return (!error)
     ? <Layout
        categories={categories}
        latitude={latitude}
        longitude={longitude}
      />
     : <div>{error}</div>
  }
}

export default Home
