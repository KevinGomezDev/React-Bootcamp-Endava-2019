import React from 'react';
import Avatar from './Avatar';

class Nav extends React.PureComponent {
  /*shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props.latitude)
    console.log(nextProps.latitude)
    return !(this.props.latitude === nextProps.latitude)
  }*/
  
  render() {
    return <nav className='main-nav'>
    <div className='geo-notice'>
      <span>Latitude: {this.props.latitude}</span>
      <span>Longitude: {this.props.longitude}</span>
    </div>
    <Avatar imgSrc='https://avatars0.githubusercontent.com/u/25872784' name='Kevin' age={26} />
  </nav>
  }
}

export default Nav;
