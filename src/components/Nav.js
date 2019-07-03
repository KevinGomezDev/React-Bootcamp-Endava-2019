import React from 'react'
import LocationNotice from './LocationNotice'
import Avatar from './Avatar'
import { GeoContext } from '../enhancers/GeoProvider'

class Nav extends React.Component {
  /*shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props.latitude)
    console.log(nextProps.latitude)
    return !(this.props.latitude === nextProps.latitude)
  }*/

  static contextType = GeoContext
  
  render() {
    return <nav className='main-nav'>
      <LocationNotice latitude={this.context.latitude} longitude={this.context.longitude} />
      <Avatar imgSrc='https://avatars0.githubusercontent.com/u/25872784' name='Kevin' age={26} />
    </nav>
  }
}

export default Nav
