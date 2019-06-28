import React from 'react'
import { getRestaurant } from '../api/restaurants'

class Restaurant extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      id:'',
      name: '',
      cuisines: '',
      locations: {},
      photos: [],
    }
  }

  componentDidMount() {
    /*const { id } = this.props.match.params
    getRestaurant(id)
    .then((restaurant) => this.setState({...restaurant}))*/
  }

  render() {
    const { id, name, cuisines } = this.props.location.state
    return <article className='restaurant-container'>
    <h3>{id}</h3>
    <h3>{name}</h3>
    <h3>{cuisines}</h3>
  </article>
  }

}

export default Restaurant
