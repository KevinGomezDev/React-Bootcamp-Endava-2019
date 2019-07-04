import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/counter'

import Counter from '../components/Counter'

const mapStateToProps = (state) => ({
  counter: state.counter.number
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ increment, decrement }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)