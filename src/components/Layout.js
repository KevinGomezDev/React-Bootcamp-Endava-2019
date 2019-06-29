import React from 'react'
//Data
import recipes from '../sample/recipes'

//Components
import ErrorBoundary from './ErrorBoundary'
import Category from './Category'
import CategoryForm from './CategoryForm'
import Recipe from './Recipe'
import Restaurants from './Restaurants'
import Nav from './Nav'

function Layout (props) {
  return <ErrorBoundary>
        <Nav latitude={props.latitude} longitude={props.longitude} />
        <main className='app-container'>
      <section className='section'>
        <header className='section-header'>
          <h2>Menus</h2>
        </header>
        <div className='section-content'>
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
        <div className='section-content'>
          {(props.latitude && props.longitude) 
            && <Restaurants latitude={props.latitude} longitude={props.longitude} />
          }
        </div>
      </section>
      <section className='section'>
        <header className='section-header'>
          <h2>Categorias</h2>
        </header>
        <div className='section-content'>
          {props.categories.map((category) => {
              return <Category
                {...category}
                key={category.id}
              />}
          )}
        </div>
      </section>
      <section className='detail-section'>
        <CategoryForm />
      </section>
    </main>
  </ErrorBoundary>
}

Layout.defaultProps = {
  latitude: '6.2442',
  longitude: '75.5812'
}

export default Layout;