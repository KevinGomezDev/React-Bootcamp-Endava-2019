import React from 'react';
import Avatar from './Avatar';

function Nav(props) {
  return <nav className='main-nav'>
    <div className='geo-notice'>
      <span>Latitude: {props.latitude}</span>
      <span>Longitude: {props.longitude}</span>
    </div>
    <Avatar imgSrc='https://avatars0.githubusercontent.com/u/25872784' name='Kevin' age={26} />
  </nav>
}

export default Nav;
