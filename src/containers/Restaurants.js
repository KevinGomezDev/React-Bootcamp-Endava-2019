import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchRestaurants } from '../actions/restaurants'

import Restaurants from '../components/Restaurants'

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.data,
  loading: state.restaurants.isFetching,
  error: state.restaurants.error,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchRestaurants }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)