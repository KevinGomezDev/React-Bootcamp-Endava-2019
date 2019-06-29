import React from 'react'

function Recipe (props) {
  return <article className='recipe-container'>
    <h3>{props.title}</h3>
    <p>{props.desc}</p>
    <button>Detalle de la receta</button>
  </article>
}

export default Recipe
