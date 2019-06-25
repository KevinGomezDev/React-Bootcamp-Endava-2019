import React from 'react';

function Restaurant ({ id, name, schedule, location, toggleFavourite, isFavourite}) {
    return <article className='restaurant-container'>
    <h3>{name}</h3>
    <p>{schedule}</p>
    <p>{location}</p>
    <button onClick={(e) => toggleFavourite(id)}>
      <i className={`fa${isFavourite ? 's' : 'r'} fa-star`}></i>
    </button>
  </article>
}

export default Restaurant;