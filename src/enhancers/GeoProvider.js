import React from 'react'

export const GeoContext = React.createContext()

export class GeoProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude:  null,
    }
  }

  getGeolocation = () => {
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
    this.getGeolocation()
  }

  render () {
    return <GeoContext.Provider value={{ ...this.state }}>
      {this.props.children}
    </GeoContext.Provider>
  }
}