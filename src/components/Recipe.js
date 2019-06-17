import React from 'react';

function Recipe (props) {
  return <div className='recipe-container'>
    <h1>{props.title}</h1>
    <p>{props.desc}</p>
    <button>Detalle de la receta</button>
  </div>
}

export default Recipe;