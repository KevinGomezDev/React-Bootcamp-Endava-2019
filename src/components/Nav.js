import React from 'react';
import Avatar from './Avatar';

function Nav(props) {
  return <nav className='main-nav'>
    <div>
      <span>latitude: {props.latitude}</span>
      <span>longitude: {props.longitude}</span>
    </div>
    <Avatar imgSrc='https://avatars0.githubusercontent.com/u/25872784' name='Kevin' age={26} />
  </nav>
}

export default Nav;
