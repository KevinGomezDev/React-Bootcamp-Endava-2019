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
    }
    DEBUG_MODE && console.log('constructor')
  }

  componentDidMount() {
    DEBUG_MODE && console.log('componentDidMount')
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
    DEBUG_MODE && console.log('componentDidUpdate')
    window.document.title = `latitude: ${this.state.latitude}`
  }

  componentWillUnmount () {
    window.componentPosition = undefined
  }

  render () {
    DEBUG_MODE && console.log('render')
    const { latitude, longitude, error } = this.state
    return (latitude && longitude)
     ? <Layout latitude={latitude} longitude={longitude} />
     : <div>{error}</div>
  }
}

Home.displayName = 'MyHome'

export default Home