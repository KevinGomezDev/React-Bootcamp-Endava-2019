import React from 'react'
import { Link } from "react-router-dom";

function Restaurant (props) {
  const newlocation = {
    pathname: `/restaurant/${props.id}`,
    state: { 
      id: props.id,
      name: props.name,
      cuisines: props.cuisines
    }
  }
    return <article className='restaurant-container'>
    <h3>{props.id}</h3>
    <h3>{props.name}</h3>
    <h3>{props.cuisines}</h3>
    <button onClick={(e) => props.toggleFavourite(props.id)}>
      <i className={`fa${props.isFavourite ? 's' : 'r'} fa-star`}></i>
    </button>
    <Link to={newlocation}>Detail</Link>
  </article>
}

export default Restaurant;