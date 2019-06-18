import React from 'react';

function Restaurant (props) {
  return <article className='restaurant-container'>
    <h3>{props.name}</h3>
    <p>{props.schedule}</p>
    <p>{props.location}</p>
  </article>
}

export default Restaurant;