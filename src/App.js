import React from 'react';

//Data
import recipes from './sample/recipes';
import restaurants from './sample/restaurants';

//Components
import Recipe from './components/Recipe';
import Restaurant from './components/Restaurant';

import './App.css';
import Avatar from './components/Avatar';

function App () {
  return <React.Fragment>
    <nav className='main-nav'>
      <Avatar imgSrc='https://avatars0.githubusercontent.com/u/25872784' name='Kevin' age={26} />
    </nav>
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
          {restaurants.map((restaurant) => {
            return <Restaurant
              key={restaurant.id}
              {...restaurant}
              />
          })}
        </div>
      </section>
      <section className='detail-section'>
        Detalle
      </section>
    </main>
  </React.Fragment>
}

export default App