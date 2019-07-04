import React from 'react'
import Counter from '../containers/Counter'
import Layout from '../components/Layout'
import { GeoProvider } from '../enhancers/GeoProvider'

const DEBUG_MODE = false

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
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
  


  componentDidUpdate(prevProps, prevState, snapshot) {
    if (DEBUG_MODE) {
      console.log('componentDidUpdate')
      console.log(snapshot)
    }
  }

  componentWillUnmount () {
    window.componentPosition = undefined
  }

  render () {
    const { error } = this.state
    return !error
      ? <GeoProvider>
            <Counter />
            <Layout />
        </GeoProvider>
      : <div>{error}</div>
  }
}

export default Home
