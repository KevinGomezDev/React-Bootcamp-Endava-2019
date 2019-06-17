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
  return <div className='app-container'>
  <Avatar imgSrc='https://avatars0.githubusercontent.com/u/25872784?s=40&v=4' name='Kevin' age={26} />
    <div>
      {recipes.map((recipe) => {
        return <Recipe
          key={recipe.id}
          title={recipe.title}
          desc={recipe.desc}/>
      })}
    </div>
    <div>
      {restaurants.map((restaurant) => {
        return <Restaurant
          key={restaurant.id}
          {...restaurant}
          />
      })}
    </div>
  </div>
}

export default App