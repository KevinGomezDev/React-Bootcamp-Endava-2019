import React from 'react'
import { Link } from 'react-router-dom'

function RestaurantThumb (props) {
  const newlocation = {
    pathname: `/restaurant/${props.id}`,
    state: { 
      id: props.id,
      name: props.name,
      cuisines: props.cuisines
    }
  }
    return <article className='restaurant-container'>
      <header className='restaurant-header'>
        <h3>{props.name}</h3>
        <button className='favourite-star' onClick={(e) => props.toggleFavourite(props.id)}>
          <i className={`fa${props.isFavourite ? 's' : 'r'} fa-star`}></i>
        </button>
      </header>
      <em>{props.id}</em>
      <p>{props.cuisines}</p>
      <Link className='restaurant-detail-button' to={newlocation}>Detail</Link>
    </article>
}

export default RestaurantThumb
