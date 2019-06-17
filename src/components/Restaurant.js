import React from 'react';

function Restaurant (props) {
  return <ul>
    <li>{props.name}</li>
    <li>{props.schedule}</li>
    <li>{props.location}</li>
  </ul>
}

export default Restaurant;