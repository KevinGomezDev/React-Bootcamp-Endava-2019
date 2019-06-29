import React from 'react'

function Category ({ id, name }) {
    return <article className='restaurant-container'>
    <h3>{name}</h3>
    <p>{id}</p>
  </article>
}

export default Category
