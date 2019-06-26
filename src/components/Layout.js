import React from 'react'
//Data
import recipes from '../sample/recipes'
import restaurants from '../sample/restaurants'

//Components
import ErrorBoundary from './ErrorBoundary'
import Recipe from './Recipe'
import Restaurant from './Restaurant'
import Nav from './Nav'

function Layout (props) {
  return <ErrorBoundary>
        <Nav latitude={props.latitude} longitude={props.longitude} />
        <main className='app-container'>
      <section className='section'>
        <header className='section-header'>
          <h2>Menus</h2>
        </header>
        <div>
          {recipes.map((recipe) => {
            return <Recipe
              key={recipe.id}
              title={recipe.title}
              desc={recipe.desc} />
          })}
        </div>
      </section>
      <section className='section'>
        <header className='section-header'>
          <h2>Restaurantes</h2>
        </header>
        <div>
          {restaurants.map((restaurant) =>
            <Restaurant
              {...restaurant}
              key={restaurant.id}
              isFavourite={props.favouriteRestaurants.includes(restaurant.id)}
              toggleFavourite={props.toggleFavourite}
            />
          )}
        </div>
      </section>
      <section className='detail-section'>
        Detalle
      </section>
    </main>
  </ErrorBoundary>
}

Layout.defaultProps = {
  latitude: '6.2442',
  longitude: '75.5812'
}

export default Layout;